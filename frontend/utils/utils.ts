export function blockInvalidChar(e: KeyboardEvent) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}

export function roundValue(value: unknown, accuracy: number = 10) {
  if (typeof value === 'number') {
    return Math.ceil(value * accuracy) / accuracy;
  }
  return 0;
}

export function removeDiacritics(str: string) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

export function isValidDecimalPercentage(number?: number | null) {
  return typeof number === 'number' && number >= 0 && number <= 1;
}