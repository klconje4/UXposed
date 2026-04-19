import { runTranslation } from './api.js'
import { currentTab } from './tabs.js'

export function initTranslator() {
  document.getElementById('translate-btn').addEventListener('click', startTranslation)
}

async function startTranslation() {
  const btn = document.getElementById('translate-btn')
  btn.disabled = true
  btn.textContent = 'Translating...'

  document.getElementById('translation-result').innerHTML = ''
  document.getElementById('translation-result').classList.remove('active')
  document.getElementById('translate-loading').classList.add('active')

  const data = await runTranslation(currentTab)
  showTranslation(data)

  btn.disabled = false
  btn.textContent = 'Scan for fine print'
}

function showTranslation(data) {
  document.getElementById('translate-loading').classList.remove('active')

  const result = document.getElementById('translation-result')
  result.innerHTML = `
    <div class="tcard">
      <div class="tcard-label">what you're agreeing to</div>
      <div class="tcard-summary">${data.plainSummary}</div>
    </div>

    <div class="tcard">
      <div class="tcard-label">your commitments</div>
      <ul class="tcard-list">
        ${data.agreeing.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div class="tcard">
      <div class="tcard-label">what they're not liable for</div>
      <ul class="tcard-list">
        ${data.notLiable.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div class="tcard-label" style="margin-bottom:10px">red flags</div>
    ${data.redFlags.map(f => `
      <div class="pcard">
        <div class="pcard-top">
          <div class="pcard-name">${f.clause}</div>
          <div class="pbadge ${f.severity === 'high' ? 'high' : f.severity === 'med' ? 'med' : 'low'}">${f.severity}</div>
        </div>
        <div class="pcard-desc">${f.explanation}</div>
      </div>
    `).join('')}

    <button class="reset-btn" onclick="resetTranslator()">↺ scan again</button>
  `
  result.classList.add('active')
}

export function resetTranslator() {
  document.getElementById('translate-btn').disabled = false
  document.getElementById('translate-btn').textContent = 'Scan for fine print'
  document.getElementById('translation-result').classList.remove('active')
  document.getElementById('translation-result').innerHTML = ''
}

window.resetTranslator = resetTranslator