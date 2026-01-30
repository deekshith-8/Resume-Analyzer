const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { resume, job } = req.body;

  if (!resume || !job) {
    return res.status(400).json({ error: "Missing resume or job description" });
  }

  // Mock AI response (will be replaced with real OpenAI)
  res.json({
    feedback: `
Resume analysis complete.

• Overall match: Moderate
• Missing areas: More project-based experience
• Suggestions:
  - Add measurable achievements
  - Highlight relevant technical skills
  - Align resume keywords with job description
`
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
