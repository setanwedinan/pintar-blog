# dynamic_usd_idr_report.py
import requests
from datetime import datetime, timedelta

BASE_URL = "https://api.frankfurter.app"
FROM_CURRENCY = "USD"
TO_CURRENCY = "IDR"
LOOKBACK_DAYS = 30
TREND_DAYS = 14


def format_currency(amount, currency="IDR"):
    if currency == "IDR":
        return f"{amount:,.0f}".replace(',', '.')
    return f"{amount:,.2f}"


def get_date_str(days_ago):
    return (datetime.now() - timedelta(days=days_ago)).strftime('%Y-%m-%d')


def calculate_trend(rates_data_list, period_days, threshold_pct=1.0):
    if not rates_data_list or len(rates_data_list) < period_days + 1:
        return "tidak cukup data", "tidak tersedia", "tidak tersedia"
    try:
        start_rate_idx = len(rates_data_list) - (period_days + 1)
        end_rate_idx = len(rates_data_list) - 1
        if start_rate_idx < 0:
            return "tidak cukup data", "tidak tersedia", "tidak tersedia"
        start_date_str, start_rate = rates_data_list[start_rate_idx]
        end_date_str, end_rate = rates_data_list[end_rate_idx]
        change = end_rate - start_rate
        percent_change = (change / start_rate) * 100 if start_rate else 0
        UP_THRESHOLD = 1.0
        DOWN_THRESHOLD = -1.0
        trend_desc = "Stabil"
        trend_slope = "sideways"
        prediction = "kemungkinan sideways dengan volatilitas terbatas"
        if percent_change > UP_THRESHOLD:
            trend_desc = "Naik"
            trend_slope = "mengalami kenaikan"
            prediction = "kemungkinan akan sedikit menguat"
        elif percent_change < DOWN_THRESHOLD:
            trend_desc = "Turun"
            trend_slope = "mengalami penurunan"
            prediction = "kemungkinan akan sedikit melemah"
        else:
            trend_desc = "Stabil"
            trend_slope = "sideways"
            prediction = "kemungkinan sideways dengan volatilitas terbatas"
        return trend_desc, trend_slope, prediction
    except Exception as e:
        return f"error hitung tren: {e}", "tidak tersedia", "tidak tersedia"


def generate_report_text():
    now = datetime.now()
    try:
        thirty_days_ago_str = get_date_str(LOOKBACK_DAYS)
        # Latest rate
        latest_url = f"{BASE_URL}/latest?from={FROM_CURRENCY}&to={TO_CURRENCY}"
        latest_response = requests.get(latest_url, timeout=10)
        latest_response.raise_for_status()
        latest_data = latest_response.json()
        current_api_rate = latest_data['rates'][TO_CURRENCY]
        current_api_date_str = latest_data['date']
        yesterday_str = (now - timedelta(days=1)).strftime('%Y-%m-%d')
        # Use timeseries endpoint to fetch full 30‑day range (including yesterday)
        # We will later extract yesterday's rate from the returned series.
        # The timeseries endpoint expects a range; we will request from 30 hari lalu to yesterday.
        # The actual URL will be built later in the function after we know the dates.
        y_data = None
        yesterday_rate_val = y_data['rates'][TO_CURRENCY]
        yesterday_fetched_date_str = y_data['date']
        if current_api_date_str == now.strftime('%Y-%m-%d'):
            final_current_rate = current_api_rate
            final_current_report_date_str = now.strftime('%Y-%m-%d')
        else:
            final_current_rate = yesterday_rate_val
            final_current_report_date_str = yesterday_fetched_date_str
        # History 30d
        history_end_date_for_fetch = yesterday_fetched_date_str
        history_url = f"{BASE_URL}/timeseries?start_date={thirty_days_ago_str}&end_date={history_end_date_for_fetch}&from={FROM_CURRENCY}&to={TO_CURRENCY}"
        h_res = requests.get(history_url, timeout=10)
        h_res.raise_for_status()
        h_data = h_res.json()
        rates_30d_dict = h_data.get('rates', {})
        if not rates_30d_dict:
            return f"Error: Tidak bisa mengambil data historis 30 hari dari {BASE_URL}."
        sorted_rates_list = []
        for date_str, rates in sorted(rates_30d_dict.items()):
            if TO_CURRENCY in rates:
                sorted_rates_list.append((date_str, rates[TO_CURRENCY]))
        if not sorted_rates_list:
            return f"Error: Tidak ada data {TO_CURRENCY} yang valid dalam 30 hari terakhir dari {BASE_URL}."
        yesterday_calc_rate = None
        for date_str, rate in sorted_rates_list:
            if date_str == yesterday_fetched_date_str:
                yesterday_calc_rate = rate
                break
        if yesterday_calc_rate is None:
            yesterday_calc_rate = yesterday_rate_val
        daily_change = final_current_rate - yesterday_calc_rate
        percent_change = (daily_change / yesterday_calc_rate) * 100 if yesterday_calc_rate else 0
        all_rates_values = [rate for date, rate in sorted_rates_list]
        if not all_rates_values:
            return "Error: Data rates kosong untuk statistik 30 hari."
        highest_30d = max(all_rates_values)
        lowest_30d = min(all_rates_values)
        average_30d = sum(all_rates_values) / len(all_rates_values)
        trend_desc, trend_slope, prediction = calculate_trend(sorted_rates_list, TREND_DAYS)
        parts = []
        parts.append(f"Rate saat ini: {format_currency(final_current_rate, TO_CURRENCY)} • Perubahan: {format_currency(daily_change)} ({percent_change:.2f}%), kemarin {format_currency(yesterday_calc_rate, TO_CURRENCY)}")
        parts.append(f"Statistik 30 hari: tertinggi {format_currency(highest_30d, TO_CURRENCY)}, rendah {format_currency(lowest_30d, TO_CURRENCY)}, rata-rata {format_currency(average_30d, TO_CURRENCY)}")
        parts.append(f"Analisis: Tren {trend_desc} ({TREND_DAYS} hari) • Prediksi {TREND_DAYS} hari ke depan: {prediction}")
        full_report_text = "\n".join(parts)
        full_report_text += f"\nSumber: Frankfurter API (api.frankfurter.app), Data per {final_current_report_date_str}"
        full_report_text += f"\nTimestamp (Laporan): {now.strftime('%Y-%m-%d %H:%M %Z')}"
        return full_report_text
    except requests.exceptions.Timeout:
        return "Error: API request timed out. Please check connection or API status."
    except requests.exceptions.RequestException as e:
        return f"Error fetching data from API: {e}"
    except Exception as e:
        return f"Terjadi kesalahan tak terduga: {e}"

if __name__ == "__main__":
    print(generate_report_text())
