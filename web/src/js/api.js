import { hardcodedReports, hardcodedTranslation } from './data.js'

const DEMO_MODE = true
const API_URL = window.location.hostname === 'localhost' 
  ? '/api/analyze'
  : 'https://nyszph4w3m.execute-api.us-west-2.amazonaws.com/analyze'

export async function runAnalysis(currentTab) {
  if (DEMO_MODE) return hardcodedReports[currentTab]

  try {
    const pageText = document.getElementById(currentTab === 'email' ? 'view-email' : 'view-website').innerText
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: pageText,
        source: currentTab === 'email' ? 'mail.google.com' : 'shopnow.com',
        type: currentTab === 'email' ? 'email' : 'webpage',
        action: 'analyze'
      })
    })
    return await response.json()
  } catch (err) {
    console.error(err)
    return hardcodedReports[currentTab]
  }
}

export async function runTranslation(currentTab) {
  if (DEMO_MODE) return hardcodedTranslation[currentTab]

  try {
    const pageText = document.getElementById(currentTab === 'email' ? 'view-email' : 'view-website').innerText
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: pageText,
        action: 'translate'
      })
    })
    return await response.json()
  } catch (err) {
    console.error(err)
    return hardcodedTranslation[currentTab]
  }
}