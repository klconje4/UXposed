import { hardcodedHistory } from './data.js'

const API_URL = window.location.hostname === 'localhost' 
  ? '/api/analyze'
  : 'https://nyszph4w3m.execute-api.us-west-2.amazonaws.com/analyze'

export async function loadHistory() {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'history' })
    })
    const data = await response.json()
    return data.items || []
  } catch (err) {
    console.error(err)
    return []
  }
}

export function renderHistory(items) {
  const container = document.getElementById('history-list')
  if (!items || items.length === 0) {
    container.innerHTML = '<div class="history-empty">no scans yet</div>'
    return
  }

  container.innerHTML = items.map(item => {
    const score = item.ethicsScore
    const scoreClass = score < 35 ? 'bad' : score < 60 ? 'mid' : 'good'
    const timeAgo = getTimeAgo(item.timestamp)
    const icon = item.type === 'email' ? '📧' : '🌐'

    return `
      <div class="history-row">
        <div class="history-row-left">
          <div class="history-icon">${icon}</div>
          <div class="history-info">
            <div class="history-source">${item.source}</div>
            <div class="history-meta">${item.patternCount} patterns · ${timeAgo}</div>
          </div>
        </div>
        <div class="history-score ${scoreClass}">${score}</div>
      </div>
    `
  }).join('')
}

function getTimeAgo(timestamp) {
  const diff = Date.now() - new Date(timestamp).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export async function initHistory() {
  const items = await loadHistory()
  renderHistory(items)
}

window.initHistory = initHistory