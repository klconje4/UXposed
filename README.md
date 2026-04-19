# UXposed

Dark patterns work because they're designed to skip your rational thinking entirely. Urgency, guilt, and confusion are engineered to get you to act before you can think. UXposed interrupts that automatic process long enough to surface what's actually going on — so you're responding to reality instead of reacting to whatever someone designed you to feel. As a Cognitive Science major minoring in Computer Science, my goal is to make the human experience of using technology much more pleasant.

## Features

- **Analyze** — scans any webpage or email for dark patterns and phishing tactics, returns an ethics score and simple explanation of each one
- **Translate** — automatically finds terms and conditions and fine print on the page and breaks it down into what you're actually agreeing to
- **History** — persistent log of every page you've scanned, powered by DynamoDB

## Tech Stack

**Frontend:** HTML, CSS, JavaScript, Vite, GitHub Pages

**AWS Backend:**
- API Gateway — REST endpoint connecting frontend to Lambda
- Lambda — serverless function running the full analysis pipeline
- Amazon Comprehend — sentiment analysis and key phrase extraction
- Amazon Bedrock (Claude Sonnet) — dark pattern reasoning and plain language translation
- DynamoDB — persistent report history

## How it works

The extension reads the live page DOM or email body and sends the text to a Lambda function via API Gateway. Lambda runs it through Comprehend for pre-analysis, then passes the enriched input to Bedrock which identifies manipulation tactics, names the cognitive bias each one exploits, and returns a structured report. Every scan is saved to DynamoDB.

## Demo website (Github Pages)
https://klconje4.github.io/UXposed/


## Built at
AWS Hackathon 2026