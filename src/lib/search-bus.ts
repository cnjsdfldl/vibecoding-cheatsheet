const EVENT = 'vibe:open-search'

export function openSearch() {
  window.dispatchEvent(new CustomEvent(EVENT))
}

export function onOpenSearch(fn: () => void) {
  const handler = () => fn()
  window.addEventListener(EVENT, handler)
  return () => window.removeEventListener(EVENT, handler)
}
