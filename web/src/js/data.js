export const hardcodedReports = {
  email: {
    ethicsScore: 18,
    summary: 'Phishing email impersonating PayPal using urgency, fear, and identity spoofing.',
    patterns: [
      { type: 'false urgency', name: 'Artificial deadline threat', severity: 'high', description: 'Claims your account will be permanently closed in 24 hours — a pressure tactic with no real basis designed to override careful thinking.', highlight: ['em-urgency'] },
      { type: 'impersonation', name: 'Spoofed sender identity', severity: 'high', description: 'The sender address is paypa1.com (with a number "1") not paypal.com — designed to look legitimate at a glance but route to a malicious domain.', highlight: ['em-sender'] },
      { type: 'fear appeal', name: 'Fund safety threat', severity: 'high', description: '"We cannot guarantee the safety of your funds" exploits loss aversion — the fear of losing money is stronger than the desire to gain it.', highlight: ['em-threat'] },
      { type: 'deceptive cta', name: 'Misleading action button', severity: 'med', description: 'The "Verify My Account Now" button links to an external domain, not PayPal. Urgency in the label discourages users from pausing to inspect the URL.', highlight: ['em-cta'] },
    ]
  },
  website: {
    ethicsScore: 31,
    summary: 'E-commerce checkout page using multiple dark patterns to pressure purchase decisions.',
    patterns: [
      { type: 'confirmshaming', name: 'Guilt-trip opt-out', severity: 'high', description: 'The decline button reads "I don\'t want to save money or protect my purchase" — deliberately humiliating phrasing designed to make users feel foolish for saying no.', highlight: ['site-decline'] },
      { type: 'hidden costs', name: 'Late-stage fee reveal', severity: 'high', description: 'A $12.99 "service & processing fee" only appears in the order summary after the user has committed to a product — a classic bait-and-switch on final price.', highlight: ['site-hidden-fee'] },
      { type: 'artificial scarcity', name: 'False stock pressure', severity: 'med', description: '"Only 2 left!" on a mass-produced consumer product creates urgency that cannot be verified and likely resets — pushing users to buy before they\'re ready.', highlight: ['site-scarcity'] },
      { type: 'forced consent', name: 'Pre-checked data sharing', severity: 'med', description: 'The newsletter signup includes a pre-checked box consenting to third-party data sharing. Users must actively opt out — the default exploits inertia.', highlight: ['site-newsletter'] },
    ]
  }
}

export const hardcodedTranslation = {
  email: {
    plainSummary: "This is a phishing email pretending to be from PayPal. It is not a real PayPal email. The sender address is paypa1.com — note the number 1 instead of the letter l. No legitimate company will threaten to permanently close your account and hold your funds within 24 hours. Do not click any links in this email.",
    agreeing: [
      "Clicking any link hands your login credentials to a malicious third party",
      "Any information you enter will be captured by scammers",
      "Your PayPal account could be compromised if you interact with this email"
    ],
    notLiable: [
      "The real PayPal is not responsible for this email — it did not send it",
      "Any financial loss from interacting with this email is not covered by PayPal's buyer protection",
      "There is no legitimate account suspension — this claim is fabricated"
    ],
    redFlags: [
      { clause: "Spoofed sender domain", severity: "high", explanation: "The email comes from paypa1.com (number 1, not letter l) — a classic impersonation tactic designed to fool users at a glance." },
      { clause: "24-hour account closure threat", severity: "high", explanation: "Legitimate companies do not threaten to permanently close accounts and hold funds on a 24-hour deadline. This is designed to bypass your rational thinking." },
      { clause: "Fund safety threat", severity: "high", explanation: '"We cannot guarantee the safety of your funds" is a fear-based manipulation tactic exploiting loss aversion to force immediate action.' },
      { clause: "Unverifiable action button", severity: "high", explanation: "The verify button links to an external domain unrelated to PayPal — any credentials entered go directly to attackers." }
    ]
  },
  website: {
    plainSummary: "By completing this checkout you are agreeing to a $12.99 service fee that was not shown upfront. The pre-checked newsletter box means you are automatically consenting to your email and data being shared with third party advertising partners unless you manually uncheck it. The decline button is deliberately worded to make you feel guilty for saying no.",
    agreeing: [
      "Paying a $12.99 service and processing fee on top of the listed product price",
      "Receiving daily promotional emails from ShopNow and partner companies",
      "Your personal data including email and browsing behavior being shared with third party advertisers",
      "Automatic opt-in to the loyalty program unless you uncheck the pre-selected box"
    ],
    notLiable: [
      "ShopNow is not liable if third party partners misuse your shared data",
      "The service fee is non-refundable even if you return the product",
      "Promotional email frequency and content is at ShopNow's discretion",
      "Stock availability claims are not guaranteed and may not reflect actual inventory"
    ],
    redFlags: [
      { clause: "Hidden service fee", severity: "high", explanation: "A $12.99 fee only appears at the final checkout step after you have already committed time and intent to the purchase — a deliberate bait and switch." },
      { clause: "Pre-checked data sharing consent", severity: "high", explanation: "The newsletter checkbox is pre-checked and buried in fine print. You are automatically consenting to third party data sharing unless you actively opt out." },
      { clause: "Confirmshaming decline button", severity: "high", explanation: 'The opt-out button reads "I don\'t want to save money or protect my purchase" — designed to make declining feel irrational and shameful.' },
      { clause: "Unverifiable scarcity claim", severity: "med", explanation: '"Only 2 left in stock" on a mass-produced item cannot be verified and likely resets automatically to maintain artificial urgency.' }
    ]
  }
}

export const hardcodedHistory = [
  { reportId: '1', source: 'amazon.com', type: 'webpage', ethicsScore: 29, patternCount: 5, timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
  { reportId: '2', source: 'mail.google.com', type: 'email', ethicsScore: 18, patternCount: 4, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString() },
  { reportId: '3', source: 'shopnow.com', type: 'webpage', ethicsScore: 31, patternCount: 4, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  { reportId: '4', source: 'linkedin.com', type: 'webpage', ethicsScore: 44, patternCount: 3, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString() },
  { reportId: '5', source: 'netflix.com', type: 'webpage', ethicsScore: 38, patternCount: 3, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString() },
  { reportId: '6', source: 'doordash.com', type: 'webpage', ethicsScore: 52, patternCount: 2, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString() },
]