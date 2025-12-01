# Simple Content Summarizer Using Amazon Bedrock (JavaScript)

###  Problem
Users struggle to quickly understand long content.  
This project summarizes text using Amazon Bedrock's Claude model.

###  Solution
User enters text → JavaScript calls AWS Bedrock → Claude generates summary → Output displayed immediately.

---

##  Architecture

User → HTML UI → JavaScript → Amazon Bedrock → Claude → Summary

---

##  AWS Services Used
- **Amazon Bedrock** (Model inference)
- **Claude v2 model**
- **IAM** (Programmatic Access)

---

##  How it Works
1. User enters long text.
2. JavaScript sends a prompt to Claude via Bedrock.
3. Claude returns the summary.
4. UI displays the summary.

---

##  Code
HTML and JS files included.

---

##  Author
Aditi Sahu  
Workshop 1 – AI for Bharat, H2S Academy

