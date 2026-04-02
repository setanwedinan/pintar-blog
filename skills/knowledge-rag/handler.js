#!/usr/bin/env node
/**
 * OpenClaw Internal Handler for Knowledge RAG
 * Auto-detects URLs and /kb commands from Telegram messages
 *
 * MODES:
 * - Silent auto-ingest: URLs are ingested automatically without response
 * - /kb command: Search knowledge base and show results
 */

const { processMessage, formatResponse } = require('./telegram.js');
const path = require('path');
const fs = require('fs');

const SKILL_DIR = __dirname;

// Debug logging
function debug(...args) {
  const timestamp = new Date().toISOString();
  console.error(`[KnowledgeRAG ${timestamp}]`, ...args);
}

// Handler function for OpenClaw internal hooks
async function handleMessage(event) {
  debug('Received event:', JSON.stringify(event, null, 2));

  const { channel, peer, message, senderId, senderName } = event;

  // Only process Telegram messages
  if (channel !== 'telegram') {
    debug('Skipping: not telegram channel, got:', channel);
    return null;
  }

  // Get config for allowed topic ID and user ID
  const configPath = path.join(SKILL_DIR, 'config.json');
  let config;
  try {
    const configContent = fs.readFileSync(configPath, 'utf8');
    config = JSON.parse(configContent);
    debug('Config loaded, telegramTopicId:', config.telegramTopicId);
  } catch (error) {
    debug('Error loading config:', error.message);
    return null;
  }

  const allowedTopicId = config.telegramTopicId;
  const allowedUserId = config.allowedUserId;

  // Get peer ID - could be direct (number) or topic (object with id)
  const peerId = peer?.id || peer;
  const isTopic = typeof peerId === 'string' && peerId.startsWith('-100');
  const isDM = typeof peerId === 'number' || (typeof peerId === 'string' && !peerId.startsWith('-100'));

  // Allow both:
  // 1. Messages from configured topic
  // 2. DMs from allowed user
  let shouldProcess = false;

  if (isTopic && allowedTopicId && peerId == allowedTopicId) {
    shouldProcess = true;
    debug('Topic matched, processing...');
  } else if (isDM && allowedUserId && senderId == allowedUserId) {
    shouldProcess = true;
    debug('DM matched, processing...');
  } else {
    debug(`Skipping: peerId=${peerId}, isTopic=${isTopic}, isDM=${isDM}, senderId=${senderId}`);
    return null;
  }

  // Skip if no text content
  if (!message || !message.text) {
    debug('Skipping: no text content');
    return null;
  }

  const text = message.text;
  debug('Processing text:', text.substring(0, 100));

  try {
    // Process the message (extract URLs, handle /kb commands)
    const results = await processMessage(text);
    debug('Results:', JSON.stringify(results));

    // SILENT MODE: Auto-ingest URLs without response
    if (results.urlsIngested.length > 0 && !results.isKbCommand) {
      debug(`✅ Silently ingested ${results.urlsIngested.length} URL(s)`);
      // Return null to suppress auto-reply
      return null;
    }

    // REPLY ONLY: /kb command or explicit queries
    if (results.isKbCommand || results.urlsIngested.length > 0) {
      const response = formatResponse(results);
      debug('Response:', response);

      if (!response) {
        return null;
      }

      // Return response to send
      return {
        channel: 'telegram',
        to: peerId,
        text: response,
        parseMode: 'Markdown'
      };
    }

    // Nothing happened
    debug('No URLs or /kb command found, skipping');
    return null;
  } catch (error) {
    debug('Error processing message:', error.message, error.stack);
    return null;
  }
}

// Export for OpenClaw internal hooks
module.exports = {
  handleMessage
};
