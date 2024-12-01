export default function (blob: string) {
  const input = blob
    .trim()
    .split('\n')
    .map((line) => line.trim().split('  '))

  const b = input.map(([_, b]) => b).sort((a, b) => (a < b ? -1 : 1))
  return input
    .map(([a, _]) => a)
    .sort((a, b) => (a < b ? -1 : 1))
    .reduce((sum, value, i) => sum + Math.abs(+value - +b[i]), 0)
}
