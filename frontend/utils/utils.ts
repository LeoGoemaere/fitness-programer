export function blockInvalidChar(e: KeyboardEvent) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}

export function roundValue(value: unknown) {
  if (typeof value === 'number') {
    return Math.ceil(value * 10) / 10;
  }
  return 0;
}