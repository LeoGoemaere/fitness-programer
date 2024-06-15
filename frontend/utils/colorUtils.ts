export function getBrightness(hex: string) {
  const rgb = HEXToRGB(hex)
  // http://www.w3.org/TR/AERT#color-contrast
  return Math.round((parseInt(rgb.r) * 299 + parseInt(rgb.g) * 587 + parseInt(rgb.b) * 114) / 1000)
}

export function HEXToRGB(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return { r, g, b }
}