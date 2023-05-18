export function formatBySeparator(x: number, separator: string = ',') {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
