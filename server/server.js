
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("TechNova AI Server is Running!");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    // Create Gemini conversation with previous messages
    const chat = ai.chats.create({
      model: "gemini-3.5-flash-lite",

      history: history,

      config: {
        systemInstruction: `
          You are TechNova AI, the official virtual assistant of TechNova, an AI software development agency based in Chattogram, Bangladesh.

          Your responsibilities:
          - Explain our web development, mobile app development, AI solutions, UI/UX design, database management, and cybersecurity services.
          - Help visitors understand our projects and development process.
          - Ask visitors about their requirements when they want a website or software solution.
          - Be friendly, professional, and concise.
          - Use simple language.
          - If someone asks about pricing, explain that pricing depends on project requirements and invite them to contact our team.
          - Never invent prices, client names, completed projects, or company information.
          - If you don't know something, politely say so.
        `,
      },
    });

    // Send the new message
    const response = await chat.sendMessage({
      message: message,
    });

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("Gemini Error:", error.message);

    res.status(500).json({
      reply: "Sorry, something went wrong. Please try again.",
    });
  }
});

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`TechNova AI Server running on port ${PORT}`);
});

console.log("Server listening:", server.listening);
