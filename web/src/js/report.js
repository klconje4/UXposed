import { clearHighlights, highlightPattern } from './highlight.js'

export function showReport(data) {
  document.getElementById('scan-bar').classList.remove('active')

  const patterns = data.patterns || []
  const score = data.ethicsScore ?? data.score ?? 0
  const highCount = patterns.filter(p => p.severity === 'high').length

  const report = document.getElementById('report')
  report.innerHTML = `
    <div class="score-strip">
      <div class="score-item">
        <div class="score-item-label">ethics score</div>
        <div class="score-item-val bad">${score}</div>
        <div class="score-item-sub">out of 100</div>
      </div>
      <div class="score-item">
        <div class="score-item-label">patterns found</div>
        <div class="score-item-val mid">${patterns.length}</div>
        <div class="score-item-sub">${highCount} high severity</div>
      </div>
    </div>
    <div class="patterns-label">detected patterns</div>
    ${patterns.map((p, i) => `
      <div class="pcard" style="animation-delay:${i * 0.08}s" onclick="highlightPattern(${JSON.stringify(p.highlight || []).replace(/"/g, '&quot;')})">
        <div class="pcard-type">${p.type || ''}</div>
        <div class="pcard-top">
          <div class="pcard-name">${p.name}</div>
          <div class="pbadge ${p.severity === 'high' ? 'high' : p.severity === 'med' ? 'med' : 'low'}">${p.severity}</div>
        </div>
        <div class="pcard-desc">${p.description || p.desc || ''}</div>
      </div>
    `).join('')}
    <button class="reset-btn" onclick="resetPanel()">↺ scan again</button>
  `

  report.classList.add('active')

  setTimeout(() => {
    patterns.forEach(p => {
      const ids = p.highlight || []
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el) el.classList.add('flagged')
      })
    })
  }, patterns.length * 80 + 200)
}

export function resetPanel() {
  const btn = document.getElementById('analyze-btn')
  btn.disabled = false
  btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:white;fill:none;stroke-width:2;stroke-linecap:round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> Analyze this page'
  document.getElementById('scan-bar').classList.remove('active')
  document.getElementById('scan-fill').style.width = '0%'
  document.getElementById('idle-state').style.display = 'block'
  document.getElementById('report').classList.remove('active')
  document.getElementById('report').innerHTML = ''
  clearHighlights()
}

window.resetPanel = resetPanel