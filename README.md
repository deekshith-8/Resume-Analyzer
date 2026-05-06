# 📄 AI Resume Analyzer

An AI-powered web app that analyzes your resume against a job description and provides structured feedback using LLaMA 3.3.

## 🚀 Live Demo
👉 [Try it here](https://resume-analyzer-ashy-seven.vercel.app)

## ✨ Features
- Paste your resume and job description for instant analysis
- AI-generated match score out of 10
- Identifies missing skills and strengths
- Provides 3 specific improvement suggestions
- Fast responses powered by Groq

## 🛠️ Tech Stack
**Frontend:** HTML, CSS, JavaScript — deployed on Vercel
**Backend:** Node.js, Express — deployed on Render
**AI:** Groq API (LLaMA 3.3 70B)

## ⚙️ How It Works
1. User pastes resume and job description
2. Frontend sends POST request to Express backend
3. Backend calls Groq API with structured prompt
4. LLaMA 3.3 returns match score, missing skills, strengths and suggestions
5. Results displayed instantly in the UI

## 🔧 Run Locally

```bash
git clone https://github.com/deekshith-8/Resume-Analyzer.git
cd Resume-Analyzer/backend
npm install
```

Create a `.env` file in the backend folder:

Start the backend:
```bash
node server.js
```

Open `docs/index.html` in your browser.

## 👤 Built by
**Deekshith Gowda** — [LinkedIn](https://linkedin.com/in/deekshithg1206) · [GitHub](https://github.com/deekshith-8)
