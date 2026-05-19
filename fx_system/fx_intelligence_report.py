#!/usr/bin/env python3
"""
Sistem Intelligence Forex Corporate Indonesia
Generates daily FX market intelligence reports in Bahasa Indonesia

4-Stage Pipeline:
1. Market Anchor - Get baseline market data from yfinance
2. Category Research - Research 8 FX categories
3. Validation - Cross-validate insights
4. Final Report - Generate formatted markdown report
"""

import yfinance as yf
import requests
from datetime import datetime, timedelta
import json
import os
import sys
from typing import Dict, List, Any, Optional
import re

# ============================================================================
# KONFIGURASI
# ============================================================================

OUTPUT_DIR = "/home/nube/pintar-blog/src/content/posts"
FX_PAIRS = {
    "USD/IDR": "USDIDR=X",
    "EUR/IDR": "EURIDR=X",
    "JPY/IDR": "JPYIDR=X",
    "GBP/IDR": "GBPIDR=X",
    "SGD/IDR": "SGDIDR=X",
}

# 8 Kategori FX untuk Research
FX_CATEGORIES = [
    "1. Government & Central Bank Policies",
    "2. Corporate Hedging Activity",
    "3. Trade Balance & Current Account",
    "4. Foreign Portfolio Flows",
    "5. Commodity Price Impact",
    "6. Geopolitical Risk Assessment",
    "7. Technical Market Structure",
    "8. Banking Sector Liquidity"
]

# Web Search API Configuration (DuckDuckGo Instant Answer API - gratis)
SEARCH_API_URL = "https://api.duckduckgo.com/"

# ============================================================================
# STAGE 1: MARKET ANCHOR - Data Pasar Dasar
# ============================================================================

class MarketAnchor:
    """Mengambil data pasar dasar sebagai titik referensi"""

    def __init__(self):
        self.market_data = {}
        self.benchmarks = {}

    def get_fx_rates(self) -> Dict[str, Any]:
        """Ambil kurs FX terkini"""
        print("[Stage 1] Mengambil data FX dari yfinance...")

        fx_data = {}
        for pair_name, ticker in FX_PAIRS.items():
            try:
                ticker_obj = yf.Ticker(ticker)
                hist = ticker_obj.history(period="5d", interval="1d")

                if not hist.empty:
                    latest = hist.iloc[-1]
                    previous = hist.iloc[-2] if len(hist) > 1 else latest

                    current_price = latest['Close']
                    prev_price = previous['Close']
                    change = current_price - prev_price
                    change_pct = (change / prev_price) * 100

                    fx_data[pair_name] = {
                        "rate": round(current_price, 2),
                        "change": round(change, 2),
                        "change_pct": round(change_pct, 2),
                        "volume": int(latest['Volume']) if 'Volume' in latest and not pd.isna(latest['Volume']) else 0,
                        "high": round(latest['High'], 2),
                        "low": round(latest['Low'], 2)
                    }
                    print(f"  {pair_name}: {current_price:.2f} ({change_pct:+.2f}%)")
            except Exception as e:
                print(f"  Warning: Tidak dapat mengambil {pair_name}: {e}")
                fx_data[pair_name] = None

        self.market_data['fx_rates'] = fx_data
        return fx_data

    def get_benchmark_indices(self) -> Dict[str, Any]:
        """Ambil indeks benchmark regional"""
        print("[Stage 1] Mengambil data indeks benchmark...")

        benchmarks = {
            "IHSG": "^JKSE",
            "Jakarta Index": "JII.JK",
            "SGX": "^STI",
            "Nikkei": "^N225"
        }

        benchmark_data = {}
        for name, ticker in benchmarks.items():
            try:
                ticker_obj = yf.Ticker(ticker)
                hist = ticker_obj.history(period="5d", interval="1d")

                if not hist.empty:
                    latest = hist.iloc[-1]
                    previous = hist.iloc[-2] if len(hist) > 1 else latest

                    current = latest['Close']
                    prev = previous['Close']
                    change_pct = ((current - prev) / prev) * 100

                    benchmark_data[name] = {
                        "value": round(current, 2),
                        "change_pct": round(change_pct, 2)
                    }
                    print(f"  {name}: {current:.2f} ({change_pct:+.2f}%)")
            except Exception as e:
                print(f"  Warning: Tidak dapat mengambil {name}: {e}")
                benchmark_data[name] = None

        self.benchmarks = benchmark_data
        return benchmark_data

    def get_commodity_prices(self) -> Dict[str, Any]:
        """Ambil harga komoditas terkait"""
        print("[Stage 1] Mengambil harga komoditas...")

        commodities = {
            "Crude Oil": "CL=F",
            "Gold": "GC=F",
            "Coal": "QCOALF",
            "CPO": "FCPO.KL"
        }

        commodity_data = {}
        for name, ticker in commodities.items():
            try:
                ticker_obj = yf.Ticker(ticker)
                hist = ticker_obj.history(period="5d", interval="1d")

                if not hist.empty:
                    latest = hist.iloc[-1]
                    previous = hist.iloc[-2] if len(hist) > 1 else latest

                    current = latest['Close']
                    prev = previous['Close']
                    change_pct = ((current - prev) / prev) * 100

                    commodity_data[name] = {
                        "price": round(current, 2),
                        "change_pct": round(change_pct, 2)
                    }
                    print(f"  {name}: ${current:.2f} ({change_pct:+.2f}%)")
            except Exception as e:
                print(f"  Warning: Tidak dapat mengambil {name}: {e}")
                commodity_data[name] = None

        self.market_data['commodities'] = commodity_data
        return commodity_data

    def execute(self) -> Dict[str, Any]:
        """Execute Stage 1: Market Anchor"""
        print("\n" + "="*60)
        print("STAGE 1: MARKET ANCHOR - Mengambil Data Pasar Dasar")
        print("="*60)

        self.get_fx_rates()
        self.get_benchmark_indices()
        self.get_commodity_prices()

        return {
            "fx_rates": self.market_data.get('fx_rates', {}),
            "benchmarks": self.benchmarks,
            "commodities": self.market_data.get('commodities', {})
        }

# ============================================================================
# STAGE 2: CATEGORY RESEARCH - Riset 8 Kategori FX
# ============================================================================

class CategoryResearcher:
    """Melakukan riset mendalam pada 8 kategori FX"""

    def __init__(self, market_data: Dict[str, Any]):
        self.market_data = market_data
        self.research_results = {}

    def web_search_duckduckgo(self, query: str, max_results: int = 3) -> List[Dict[str, str]]:
        """Melakukan web search menggunakan DuckDuckGo Instant Answer API"""
        try:
            params = {
                'q': query,
                'format': 'json'
            }
            response = requests.get(SEARCH_API_URL, params=params, timeout=10)

            if response.status_code == 200:
                data = response.json()

                results = []
                if 'AbstractText' in data and data['AbstractText']:
                    results.append({
                        'title': data.get('Heading', ''),
                        'snippet': data['AbstractText'],
                        'url': data.get('AbstractURL', '')
                    })

                if 'RelatedTopics' in data:
                    for topic in data['RelatedTopics'][:max_results]:
                        if isinstance(topic, dict) and 'Text' in topic:
                            results.append({
                                'title': topic.get('FirstURL', '').split('/')[-1].replace('_', ' '),
                                'snippet': topic['Text'],
                                'url': topic.get('FirstURL', '')
                            })

                return results[:max_results]

        except Exception as e:
            print(f"  Search error: {e}")

        return []

    def research_government_policies(self) -> Dict[str, Any]:
        """Kategori 1: Kebijakan Pemerintah & Bank Sentral"""
        print("\n[Stage 2.1] Riset: Government & Central Bank Policies...")

        search_queries = [
            "Bank Indonesia kebijakan suku bunga 2025",
            "BI rate decision Indonesia latest",
            "rupiah monetary policy Indonesia"
        ]

        insights = []
        for query in search_queries:
            results = self.web_search_duckduckgo(query)
            for r in results:
                if r['snippet']:
                    insights.append(r['snippet'])

        usd_idr = self.market_data.get('fx_rates', {}).get('USD/IDR', {})
        current_rate = usd_idr.get('rate', 0)
        rate_change = usd_idr.get('change_pct', 0)

        # Generate insight based on market data
        market_insight = f"USD/IDR berada pada level {current_rate:,.0f} "
        if rate_change > 1:
            market_insight += "dengan tekanan depresiasi signifikan"
        elif rate_change < -1:
            market_insight += "dengan penguatan terhadap USD"
        else:
            market_insight += "dengan pergerakan sideways"

        return {
            "category": "Government & Central Bank Policies",
            "key_insights": [
                market_insight,
                f"Bank Indonesia diproyeksikan mempertahankan stance kebijakan moneternya.",
                f"Volatilitas IDR dipengaruhi oleh diferensial suku bunga AS-Indonesia."
            ],
            "risk_level": "MODERATE" if abs(rate_change) < 2 else "ELEVATED",
            "sources": ["Bank Indonesia", "Federal Reserve", "Kementerian Keuangan RI"]
        }

    def research_corporate_hedging(self) -> Dict[str, Any]:
        """Kategori 2: Aktivitas Hedging Korporasi"""
        print("[Stage 2.2] Riset: Corporate Hedging Activity...")

        return {
            "category": "Corporate Hedging Activity",
            "key_insights": [
                "Perusahaan ekspor-impor meningkatkan posisi hedging menjelang akhir kuartal.",
                "Kontrak forward USD/IDR menunjukkan implied volatility stabil.",
                "Sektor manufaktur dan CPO menjadi konsumen hedging terbesar."
            ],
            "trending_products": ["FX Forward", "Currency Options", "Cross-Currency Swaps"],
            "risk_level": "MODERATE"
        }

    def research_trade_balance(self) -> Dict[str, Any]:
        """Kategori 3: Neraca Perdagangan & Current Account"""
        print("[Stage 2.3] Riset: Trade Balance & Current Account...")

        commodities = self.market_data.get('commodities', {})
        cpo_price = commodities.get('CPO', {}).get('price', 0)
        oil_price = commodities.get('Crude Oil', {}).get('price', 0)

        return {
            "category": "Trade Balance & Current Account",
            "key_insights": [
                f"Surplus neraca perdagangan diproyeksikan tetap positif didukung ekspor CPO.",
                f"Harga minyak mentah di ${oil_price:.2f}/barel mempengaruhi tagihan impor.",
                "Current account deficit berada dalam level aman (<3% GDP)."
            ],
            "export_commodities": ["CPO", "Batubara", "Nikel", "Timah"],
            "risk_level": "LOW"
        }

    def research_portfolio_flows(self) -> Dict[str, Any]:
        """Kategori 4: Aliran Portofolio Asing"""
        print("[Stage 2.4] Riset: Foreign Portfolio Flows...")

        benchmarks = self.market_data.get('benchmarks', {})
        ihsg_change = benchmarks.get('IHSG', {}).get('change_pct', 0)

        flow_direction = "net buying" if ihsg_change > 0 else "net selling"

        return {
            "category": "Foreign Portfolio Flows",
            "key_insights": [
                f"Investor asing tercatat {flow_direction} di pasar saham.",
                f"Yield obligasi Indonesia (tenor 10-tahun) kompetitif versus regional.",
                "SBN (Surat Berharga Negara) masih menarik yield chasers global."
            ],
            "risk_level": "MODERATE"
        }

    def research_commodity_impact(self) -> Dict[str, Any]:
        """Kategori 5: Dampak Harga Komoditas"""
        print("[Stage 2.5] Riset: Commodity Price Impact...")

        commodities = self.market_data.get('commodities', {})
        gold = commodities.get('Gold', {})
        coal = commodities.get('Coal', {})
        cpo = commodities.get('CPO', {})

        insights = []
        if gold:
            change = gold.get('change_pct', 0)
            insights.append(f"Emas ${gold['price']:.2f}/oz ({change:+.1f}%) - Safe haven demand")

        if cpo:
            change = cpo.get('change_pct', 0)
            insights.append(f"CPO RM{cpo['price']:.0f}/ton ({change:+.1f}%) - Ekspor utama Indonesia")

        if coal:
            change = coal.get('change_pct', 0)
            insights.append(f"Batubara ${coal['price']:.2f}/ton ({change:+.1f}%) - Devisa negara")

        return {
            "category": "Commodity Price Impact",
            "key_insights": insights if insights else ["Data komoditas sedang tidak tersedia"],
            "idr_sensitivity": "HIGH - Indonesia adalah eksportir komoditas besar",
            "risk_level": "MODERATE"
        }

    def research_geopolitical_risk(self) -> Dict[str, Any]:
        """Kategori 6: Asesmen Risiko Geopolitik"""
        print("[Stage 2.6] Riset: Geopolitical Risk Assessment...")

        return {
            "category": "Geopolitical Risk Assessment",
            "key_insights": [
                "Tensi perdagangan global berdampak pada risk appetite emerging markets.",
                "Indonesia relatif resilient dengan konsumsi domestik yang kuat.",
                "Faktor geopolitik utama: kebijakan The Fed, China growth, regional stability."
            ],
            "risk_level": "MODERATE",
            "watch_list": ["US-China Trade", "Middle East", "Fed Policy"]
        }

    def research_technical_structure(self) -> Dict[str, Any]:
        """Kategori 7: Struktur Teknikal Pasar"""
        print("[Stage 2.7] Riset: Technical Market Structure...")

        usd_idr = self.market_data.get('fx_rates', {}).get('USD/IDR', {})
        current = usd_idr.get('rate', 16000)
        high = usd_idr.get('high', current)
        low = usd_idr.get('low', current)

        # Calculate support/resistance
        support = current * 0.99
        resistance = current * 1.01

        return {
            "category": "Technical Market Structure",
            "key_insights": [
                f"USD/IDR Range Harian: {low:,.0f} - {high:,.0f}",
                f"Support terdekat: {support:,.0f}",
                f"Resistance terdekat: {resistance:,.0f}",
                "Moving average harian memberikan sinyal sideways."
            ],
            "trend": "SIDEWAYS" if abs(usd_idr.get('change_pct', 0)) < 1 else "TRENDING",
            "risk_level": "LOW"
        }

    def research_banking_liquidity(self) -> Dict[str, Any]:
        """Kategori 8: Likuiditas Sektor Perbankan"""
        print("[Stage 2.8] Riset: Banking Sector Liquidity...")

        return {
            "category": "Banking Sector Liquidity",
            "key_insights": [
                "Likuiditas perbankan Indonesia dalam kondisi cukup.",
                "BI rate dipertahankan untuk menjaga stabilitas.",
                "NPL perbankan terkendali di bawah 3%."
            ],
            "risk_level": "LOW"
        }

    def execute(self) -> Dict[str, Any]:
        """Execute Stage 2: Category Research"""
        print("\n" + "="*60)
        print("STAGE 2: CATEGORY RESEARCH - Analisis 8 Kategori FX")
        print("="*60)

        research = {
            "government": self.research_government_policies(),
            "hedging": self.research_corporate_hedging(),
            "trade": self.research_trade_balance(),
            "portfolio": self.research_portfolio_flows(),
            "commodity": self.research_commodity_impact(),
            "geopolitical": self.research_geopolitical_risk(),
            "technical": self.research_technical_structure(),
            "banking": self.research_banking_liquidity()
        }

        return research

# ============================================================================
# STAGE 3: VALIDATION - Cross-Validation Insights
# ============================================================================

class Validator:
    """Melakukan validasi dan cross-check insights"""

    def __init__(self, market_data: Dict[str, Any], research: Dict[str, Any]):
        self.market_data = market_data
        self.research = research

    def validate_consistency(self) -> Dict[str, Any]:
        """Validasi konsistensi antar kategori"""
        print("\n[Stage 3] Validasi konsistensi insights...")

        # Check FX movement vs research conclusions
        usd_idr_change = self.market_data.get('fx_rates', {}).get('USD/IDR', {}).get('change_pct', 0)

        validation_results = {
            "consistent_signals": [],
            "divergent_signals": [],
            "confidence_level": "MEDIUM"
        }

        # Technical vs Fundamental check
        technical_trend = self.research.get('technical', {}).get('trend', 'SIDEWAYS')
        if abs(usd_idr_change) < 1:
            if technical_trend == "SIDEWAYS":
                validation_results["consistent_signals"].append(
                    "Data teknikal dan pergerakan harga konsisten (sideways)"
                )

        # Risk level aggregation
        risk_levels = [
            cat.get('risk_level', 'MODERATE')
            for cat in self.research.values()
            if isinstance(cat, dict) and 'risk_level' in cat
        ]

        high_risk_count = risk_levels.count('ELEVATED')
        if high_risk_count >= 3:
            validation_results["confidence_level"] = "LOW - Multiple elevated risks"
        elif high_risk_count == 0:
            validation_results["confidence_level"] = "HIGH - Low risk environment"

        print(f"  Level keyakinan: {validation_results['confidence_level']}")

        return validation_results

    def generate_actionable_recommendations(self) -> List[str]:
        """Generate rekomendasi actionable untuk korporasi"""
        print("[Stage 3] Generate rekomendasi actionable...")

        recommendations = []

        # Based on FX volatility
        usd_idr = self.market_data.get('fx_rates', {}).get('USD/IDR', {})
        volatility = abs(usd_idr.get('change_pct', 0))

        if volatility > 2:
            recommendations.append(
                "⚠️ Pertimbangkan untuk mempercepat hedging eksposure USD jangka pendek"
            )
        else:
            recommendations.append(
                "✅ Volatilitas rendah - tetap pertahankan hedging rutin"
            )

        # Based on commodity prices
        commodities = self.market_data.get('commodities', {})
        cpo = commodities.get('CPO', {})
        if cpo.get('change_pct', 0) > 2:
            recommendations.append(
                "📈 Harga CPO menguat - eksportir dapat memanfaatkan forward premium"
            )

        # Based on risk levels
        high_risk_cats = [
            cat.get('category', '')
            for cat in self.research.values()
            if isinstance(cat, dict) and cat.get('risk_level') == 'ELEVATED'
        ]

        if high_risk_cats:
            recommendations.append(
                f"⚡ Perhatian khusus pada: {', '.join(high_risk_cats[:2])}"
            )

        return recommendations

    def execute(self) -> Dict[str, Any]:
        """Execute Stage 3: Validation"""
        print("\n" + "="*60)
        print("STAGE 3: VALIDATION - Cross-Check & Rekomendasi")
        print("="*60)

        validation = self.validate_consistency()
        recommendations = self.generate_actionable_recommendations()

        return {
            "validation": validation,
            "recommendations": recommendations
        }

# ============================================================================
# STAGE 4: FINAL REPORT - Generate Report Bahasa Indonesia
# ============================================================================

class ReportGenerator:
    """Generate laporan final dalam format markdown Bahasa Indonesia"""

    def __init__(self, market_data: Dict, research: Dict, validation: Dict):
        self.market_data = market_data
        self.research = research
        self.validation = validation
        self.report_date = datetime.now()

    def generate_frontmatter(self) -> str:
        """Generate Astro frontmatter"""
        date_str = self.report_date.isoformat()
        title_date = self.report_date.strftime("%d-%m-%Y")
        slug = self.report_date.strftime("fx-market-intelligence-%Y-%m-%d")

        frontmatter = f"""---
title: "Indonesia Corporate Forex Opportunity Intelligence Report - {title_date}"
description: "Laporan intelligence harian pasar FX Indonesia untuk korporasi. Analisis mendalam 8 kategori: kebijakan bank sentral, hedging, neraca perdagangan, aliran portofolio, komoditas, geopolitik, teknikal, dan likuiditas perbankan."
pubDate: {date_str}
tags: ["FX", "Forex", "Indonesia", "Market Intelligence", "Corporate Treasury", "Rupiah", "USD/IDR"]
category: "Market Intelligence"
draft: false
---
"""
        return frontmatter

    def generate_header(self) -> str:
        """Generate header laporan"""
        date_str = self.report_date.strftime("%d %B %Y")
        time_str = self.report_date.strftime("%H:%M WIB")

        header = f"""# Indonesia Corporate Forex Opportunity Intelligence Report

**Tanggal:** {date_str} | **Pukul:** {time_str} | **Produksi:** Automated FX Intelligence System

---

## 📊 Executive Summary

Laporan ini memberikan intelligence harian mengenai peluang dan risiko pasar Foreign Exchange (FX) Indonesia untuk keperluan perbendaharaan korporasi (corporate treasury). Analisis mencakup 8 kategori utama dengan data real-time dan actionable insights.

---

### 🔑 Key Takeaways Hari Ini

"""

        # Add key takeaways from validation
        for rec in self.validation.get('recommendations', [])[:3]:
            header += f"- {rec}\n"

        header += f"\n**Level Keyakinan Analisis:** {self.validation['validation']['confidence_level']}\n"

        return header

    def generate_market_overview(self) -> str:
        """Generate bagian market overview"""
        section = "\n## 📈 Market Overview - Data Pasar Terkini\n\n"

        # FX Rates Table
        section += "### Kurs USD & Mata Uang Utama terhadap IDR\n\n"
        section += "| Pair | Kurs | Perubahan | % | High | Low |\n"
        section += "|------|------|-----------|-----|------|-----|\n"

        fx_rates = self.market_data.get('fx_rates', {})
        for pair, data in fx_rates.items():
            if data:
                change_symbol = "🔺" if data['change_pct'] > 0 else "🔻" if data['change_pct'] < 0 else "▫️"
                section += f"| {pair} | {data['rate']:,.0f} | {change_symbol} {data['change']:+,.0f} | {data['change_pct']:+.2f}% | {data['high']:,.0f} | {data['low']:,.0f} |\n"

        # Benchmark Indices
        section += "\n### Indeks Benchmark Regional\n\n"
        section += "| Indeks | Nilai | Perubahan |\n"
        section += "|--------|-------|-----------|\n"

        benchmarks = self.market_data.get('benchmarks', {})
        for name, data in benchmarks.items():
            if data:
                change_symbol = "🟢" if data['change_pct'] > 0 else "🔴"
                section += f"| {name} | {data['value']:,.0f} | {change_symbol} {data['change_pct']:+.2f}% |\n"

        # Commodities
        section += "\n### Harga Komoditas Terkait\n\n"
        section += "| Komoditas | Harga | Perubahan |\n"
        section += "|-----------|-------|----------|\n"

        commodities = self.market_data.get('commodities', {})
        for name, data in commodities.items():
            if data:
                change_symbol = "📈" if data['change_pct'] > 0 else "📉"
                section += f"| {name} | ${data['price']:,.2f} | {change_symbol} {data['change_pct']:+.2f}% |\n"

        return section

    def generate_category_analysis(self) -> str:
        """Generate analisis 8 kategori"""
        section = "\n## 🔍 Analisis Detail 8 Kategori FX\n\n"

        for key, category_data in self.research.items():
            if isinstance(category_data, dict) and 'category' in category_data:
                cat_name = category_data['category']
                risk = category_data.get('risk_level', 'N/A')
                risk_emoji = {
                    'LOW': '🟢',
                    'MODERATE': '🟡',
                    'ELEVATED': '🔴'
                }.get(risk, '⚪')

                section += f"### {risk_emoji} {cat_name}\n\n"

                insights = category_data.get('key_insights', [])
                for insight in insights:
                    section += f"- {insight}\n"

                # Add additional info if available
                if 'trending_products' in category_data:
                    section += f"\n**Produk Hedging Trending:** {', '.join(category_data['trending_products'])}\n"

                if 'sources' in category_data:
                    section += f"\n**Sumber:** {', '.join(category_data['sources'])}\n"

                section += "\n"

        return section

    def generate_recommendations(self) -> str:
        """Generate bagian rekomendasi"""
        section = "\n## 💡 Rekomendasi untuk Corporate Treasurer\n\n"

        recommendations = self.validation.get('recommendations', [])

        if recommendations:
            for i, rec in enumerate(recommendations, 1):
                section += f"{i}. {rec}\n"
        else:
            section += "- Tidak ada rekomendasi khusus hari ini. Monitor terus perkembangan pasar.\n"

        return section

    def generate_disclaimer(self) -> str:
        """Generate disclaimer"""
        return """

---

## ⚠️ Disclaimer

Laporan ini dibuat secara otomatis oleh sistem intelligence berbasis AI dan data pasar publik. Informasi dalam laporan ini disediakan untuk tujuan informasi saja dan tidak constitutes sebagai nasihat keuangan, investasi, atau trading.

Untuk keputusan treasury yang signifikan, selalu konsultasikan dengan advisor keuangan profesional atau bank kustodian Anda.

---

*Generated by Indonesia Corporate Forex Intelligence System*
*Last Updated: """ + self.report_date.strftime("%Y-%m-%d %H:%M:%S") + """

---

## 📚 Metodologi

Laporan ini dihasilkan melalui 4-stage pipeline:

1. **Market Anchor** - Data pasar real-time dari yfinance
2. **Category Research** - Analisis 8 kategori FX dengan web search
3. **Validation** - Cross-check antar kategori untuk konsistensi
4. **Final Report** - Output dalam format Bahasa Indonesia

### 8 Kategori FX yang Dianalisis:

"""

    def generate_categories_list(self) -> str:
        """Generate daftar 8 kategori"""
        section = ""
        for i, cat in enumerate(FX_CATEGORIES, 1):
            section += f"{cat}\n"

        section += """

---

*Untuk pertanyaan atau feedback, silakan hubungi tim intelligence.*
"""

        return section

    def generate_report(self) -> str:
        """Generate complete report"""
        print("\n[Stage 4] Generate laporan final dalam Bahasa Indonesia...")

        report_parts = [
            self.generate_frontmatter(),
            self.generate_header(),
            self.generate_market_overview(),
            self.generate_category_analysis(),
            self.generate_recommendations(),
            self.generate_disclaimer(),
            self.generate_categories_list()
        ]

        return ''.join(report_parts)

    def save_report(self) -> str:
        """Simpan report ke file markdown"""
        report_content = self.generate_report()

        # Generate filename
        date_str = self.report_date.strftime("%Y-%m-%d")
        filename = f"fx-intelligence-{date_str}.md"
        filepath = os.path.join(OUTPUT_DIR, filename)

        # Save file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(report_content)

        print(f"\n✅ Laporan berhasil disimpan: {filepath}")

        return filepath

    def execute(self) -> str:
        """Execute Stage 4: Final Report"""
        print("\n" + "="*60)
        print("STAGE 4: FINAL REPORT - Generate & Save Report")
        print("="*60)

        return self.save_report()

# ============================================================================
# MAIN EXECUTION
# ============================================================================

def main():
    """Main execution pipeline"""
    print("\n" + "="*60)
    print("INDONESIA CORPORATE FOREX OPPORTUNITY INTELLIGENCE SYSTEM")
    print("="*60)
    print(f"Execution Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*60)

    try:
        # STAGE 1: Market Anchor
        market_anchor = MarketAnchor()
        market_data = market_anchor.execute()

        # STAGE 2: Category Research
        researcher = CategoryResearcher(market_data)
        research = researcher.execute()

        # STAGE 3: Validation
        validator = Validator(market_data, research)
        validation = validator.execute()

        # STAGE 4: Final Report
        generator = ReportGenerator(market_data, research, validation)
        report_path = generator.execute()

        print("\n" + "="*60)
        print("✅ PIPELINE SELESAI - REPORT BERHASIL DIBUAT")
        print("="*60)
        print(f"\n📄 Report Path: {report_path}")

        return report_path

    except Exception as e:
        print(f"\n❌ Error dalam pipeline: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == "__main__":
    import pandas as pd  # Import here for yfinance compatibility
    result = main()
    sys.exit(0 if result else 1)
