document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const resume = document.getElementById("resumeText").value.trim();
  const job = document.getElementById("jobText").value.trim();
  const output = document.getElementById("output");

  if (!resume || !job) {
    alert("Please paste both resume and job description.");
    return;
  }

  output.innerText = "Analyzing with AI...";

  try {
    const response = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ resume, job })
    });

    const data = await response.json();
    output.innerText = data.feedback;
  } catch (error) {
    output.innerText = "Error connecting to backend.";
    console.error(error);
  }
});
