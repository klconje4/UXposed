import { resetPanel } from './report.js'

export let currentTab = 'email'

export function switchTab(tab, el) {
  currentTab = tab
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
  el.classList.add('active')
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'))
  document.getElementById('view-' + tab).classList.add('active')
  document.getElementById('url-display').textContent = tab === 'email'
    ? 'mail.google.com/mail/u/0/#inbox'
    : 'shopnow.com/product/prosound-anc-headphones'
  resetPanel()
}

window.switchTab = switchTab