const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/analyze", async (req, res) => {
  const { resume, job } = req.body;

  if (!resume || !job) {
    return res.status(400).json({ error: "Missing resume or job description" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are an expert resume reviewer. Analyze the resume against the job description and provide structured, actionable feedback."
          },
          {
            role: "user",
            content: `Resume:\n${resume}\n\nJob Description:\n${job}\n\nProvide feedback on: match score (out of 10), missing skills, strengths, and 3 specific improvement suggestions.`
          }
        ],
        max_tokens: 1000
      })
    });

    const data = await response.json();
    const feedback = data.choices[0].message.content;
    res.json({ feedback });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Analysis failed. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
