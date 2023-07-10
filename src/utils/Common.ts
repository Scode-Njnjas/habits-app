/**
 * Converts a hexadecimal color code to RGBA format.
 * @param hexColor - The hexadecimal color code to convert.
 * @param alpha - The alpha (opacity) value, ranging from 0 to 1.
 * @returns The RGBA color code.
 */
function hexToRgba(hexColor: string, alpha: number): string {
  // Remove the leading "#" character, if present
  if (hexColor.startsWith('#')) {
    hexColor = hexColor.slice(1)
  }

  // Convert the hex values to decimal values
  const r = parseInt(hexColor.substr(0, 2), 16)
  const g = parseInt(hexColor.substr(2, 2), 16)
  const b = parseInt(hexColor.substr(4, 2), 16)

  // Validate the alpha value and clamp it between 0 and 1
  const clampedAlpha = Math.max(0, Math.min(alpha, 1))

  // Return the RGBA color code
  return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`
}

export {hexToRgba}
