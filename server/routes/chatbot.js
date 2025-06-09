const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Access your API key as an environment variable
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Load resume and other info for context
let resumeContent = '';
let infoContent = '';

try {
  resumeContent = fs.readFileSync(path.join(__dirname, '../data/resume.txt'), 'utf8');
  infoContent = fs.readFileSync(path.join(__dirname, '../data/info.txt'), 'utf8');
} catch (error) {
  console.error('Error reading context files:', error);
}

router.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a helpful assistant for Akshat Nigam's portfolio website. Your purpose is to answer questions about Akshat based on the provided resume and general information. If a question is outside the scope of this information, politely decline to answer or state that you don't have enough information.\n\nResume:\n"""\n${resumeContent}\n"""\n\nGeneral Information:\n"""\n${infoContent}\n"""\n\nUser: ${userMessage}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

module.exports = router; 