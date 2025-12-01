// -------- AWS CONFIG --------
const AWS_ACCESS_KEY = "YOUR_ACCESS_KEY";
const AWS_SECRET_KEY = "YOUR_SECRET_KEY";
const AWS_REGION = "us-east-1";

async function summarize() {
    const text = document.getElementById("inputText").value;
    const outputBox = document.getElementById("output");

    outputBox.textContent = "Summarizing... please wait.";

    const payload = {
        prompt: `Summarize this content:\n\n${text}\n\nSummary:`,
        max_tokens_to_sample: 200
    };

    const response = await fetch(
        "https://bedrock-runtime." + AWS_REGION + ".amazonaws.com/model/anthropic.claude-v2/invoke",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Amz-Date": new Date().toISOString(),
                "Authorization": "AWS4-HMAC-SHA256",
                "x-amz-access-key": AWS_ACCESS_KEY,
                "x-amz-secret-key": AWS_SECRET_KEY
            },
            body: JSON.stringify(payload)
        }
    );

    const result = await response.json();
    outputBox.textContent = result.completion ?? "No summary generated.";
}
