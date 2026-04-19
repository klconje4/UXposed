# UXposed

A dark pattern and phishing detection tool that scans webpages and emails for manipulation tactics in real time

## What it does

UXposed analyzes the content of any webpage or email and identifies manipulative design patterns and phishing tactics. Each detected pattern gets a severity rating (high, medium, low) and an explanation of each one.

**Detection categories include:**
- False urgency and artificial deadlines
- Confirmshaming and guilt-trip opt-outs
- Hidden costs revealed at the last step
- Artificial scarcity and fake stock pressure
- Spoofed sender identity and impersonation
- Fear-based coercion and fund safety threats
- Forced consent through pre-checked boxes
- Deceptive calls to action

## Built with

**Frontend**
- Vanilla HTML, CSS, JavaScript
- Vite for local development
- Deployed on GitHub Pages

**AWS Backend**
- Amazon Comprehend — sentiment analysis and key phrase extraction
- Amazon Bedrock (Claude Sonnet) — dark pattern reasoning and cognitive bias identification
- AWS Lambda — serverless backend pipeline
- Amazon API Gateway — REST endpoint connecting frontend to Lambda
- Amazon DynamoDB — report history storage
- Amazon S3 — screenshot storage

