export function blockInvalidChar(e: KeyboardEvent) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}