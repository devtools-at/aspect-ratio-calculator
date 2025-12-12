/**
 * Aspect Ratio Calculator
 * Calculate aspect ratios
 *
 * Online tool: https://devtools.at/tools/aspect-ratio-calculator
 *
 * @packageDocumentation
 */

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function calculateRatio(width: number, height: number): { w: number; h: number; decimal: number } {
  const divisor = gcd(width, height);
  return {
    w: width / divisor,
    h: height / divisor,
    decimal: width / height,
  };
}

// Export for convenience
export default { encode, decode };
