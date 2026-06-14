<div align="center">
  <h1>AI Resume Analyzer</h1>
  <p>Paste your resume. Get a match score, missing skills and actionable feedback — instantly.</p>

  <img src="https://img.shields.io/badge/Groq-LLaMA 3.3 70B-F55036?style=flat-square" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js" />
  <img src="https://img.shields.io/badge/Vercel-Frontend-000000?style=flat-square&logo=vercel" />
  <img src="https://img.shields.io/badge/Render-Backend-46E3B7?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />

  <br /><br />

  <a href="https://resume-analyzer-ashy-seven.vercel.app"><strong>→ Live Demo</strong></a>
</div>

---

## Overview

AI Resume Analyzer compares your resume against a target job description and returns structured, AI-generated feedback. It scores your match out of 10, identifies skill gaps, highlights your strengths, and gives three concrete improvement suggestions — all powered by LLaMA 3.3 70B via Groq.

---

## Features

- Match score out of 10 against any job description
- Missing skills identified from the JD
- Strengths surfaced from your resume
- 3 specific, actionable improvement suggestions
- Fast responses via Groq API

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| LLM | Groq — LLaMA 3.3 70B |
| Frontend Deployment | Vercel |
| Backend Deployment | Render |

---

## How It Works

```
User pastes resume + job description
         ↓
Frontend sends POST request to Express backend
         ↓
Backend constructs structured prompt → calls Groq API
         ↓
LLaMA 3.3 returns match score, missing skills,
strengths and improvement suggestions
         ↓
Results rendered instantly in the UI
```

---

## License

MIT — free to use, modify and distribute.

---

<div align="center">
  <p>Built by <a href="https://linkedin.com/in/deekshithg1206">Deekshith Gowda</a> &nbsp;·&nbsp; <a href="https://github.com/deekshith-8">GitHub</a></p>
</div>
