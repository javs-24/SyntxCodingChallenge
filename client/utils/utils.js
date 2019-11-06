export function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  return round(cToFahr, 1)
}

export function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}