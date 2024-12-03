export default function (blob: string) {
  return blob
    .trim()
    .split('\n')
    .map((line) => parse(line.trim()))
    .filter((isUnsafe) => isUnsafe).length
}

function parse(input: string) {
  const report = input.split(' ')

  let isSafe = true
  const isIncreasing = +report[0] < +report[1]
  for (let i = 0; i < report.length; i++) {
    let element = +report[i]
    let nextElement = +report[i + 1]

    if (!isIncreasing) {
      ;[element, nextElement] = [nextElement, element]
    }
    isSafe = applyRules(element, nextElement)

    if (!isSafe) {
      break
    }
  }
  return isSafe
}

function applyRules(a: number, b: number) {
  return !(a >= b || b - a > 3)
}
