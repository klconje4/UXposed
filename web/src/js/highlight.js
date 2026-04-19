export function clearHighlights() {
  document.querySelectorAll('.flagged').forEach(el => el.classList.remove('flagged'))
}

export function highlightPattern(ids) {
  clearHighlights()
  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) {
      el.classList.add('flagged')
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

window.highlightPattern = highlightPattern