import { currentTab } from './tabs.js'
import { showReport, resetPanel } from './report.js'
import { clearHighlights } from './highlight.js'
import { runAnalysis } from './api.js'

const scanSteps = [
  [15, 'Extracting page content...'],
  [35, 'Running sentiment analysis...'],
  [55, 'Detecting manipulation patterns...'],
  [75, 'Cross-referencing dark pattern taxonomy...'],
  [90, 'Calculating ethics score...'],
  [100, 'Analysis complete'],
]

export function startAnalysis() {
  clearHighlights()
  document.getElementById('idle-state').style.display = 'none'
  document.getElementById('report').classList.remove('active')
  document.getElementById('report').innerHTML = ''
  document.getElementById('analyze-btn').disabled = true
  document.getElementById('analyze-btn').innerHTML = 'Scanning...'
  document.getElementById('scan-bar').classList.add('active')

  let step = 0
  function tick() {
    if (step >= scanSteps.length) {
      runAnalysis(currentTab).then(data => showReport(data))
      return
    }
    const [pct, label] = scanSteps[step]
    document.getElementById('scan-fill').style.width = pct + '%'
    document.getElementById('scan-label').textContent = label
    step++
    setTimeout(tick, step === scanSteps.length ? 400 : 320)
  }
  tick()
}

window.startAnalysis = startAnalysis