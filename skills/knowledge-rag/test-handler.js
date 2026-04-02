#!/usr/bin/env node
/**
 * Test script for Knowledge RAG handler
 */

const { handleMessage } = require('./handler.js');

async function test() {
  console.log('=== Testing Knowledge RAG Handler ===\n');

  // Test 1: URL in DM (without topicId restriction)
  console.log('Test 1: URL in DM message');
  const event1 = {
    channel: 'telegram',
    peer: { id: '31300911' },
    message: { text: 'Check this: https://example.com/article' },
    senderId: '31300911',
    senderName: 'Faizal'
  };

  const result1 = await handleMessage(event1);
  console.log('Result:', result1 ? 'Response generated' : 'No response');

  // Test 2: /kb command
  console.log('\nTest 2: /kb command');
  const event2 = {
    channel: 'telegram',
    peer: { id: '31300911' },
    message: { text: '/kb test query' },
    senderId: '31300911',
    senderName: 'Faizal'
  };

  const result2 = await handleMessage(event2);
  console.log('Result:', result2 ? result2.text : 'No response');

  // Test 3: Wrong channel
  console.log('\nTest 3: Non-telegram channel');
  const event3 = {
    channel: 'whatsapp',
    peer: { id: '31300911' },
    message: { text: 'Test message' },
    senderId: '31300911',
    senderName: 'Faizal'
  };

  const result3 = await handleMessage(event3);
  console.log('Result:', result3 ? 'Response generated' : 'No response');

  console.log('\n=== Tests Complete ===');
}

test().catch(console.error);
