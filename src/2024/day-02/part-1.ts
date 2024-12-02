export default function (blob: string) {
  return blob
    .trim()
    .split('\n')
    .map((line) => parse(line.trim()))
    .filter((isUnsafe) => isUnsafe).length
}

function parse(input: string) {
  const lineValues = input.split(' ')

  let isUnsafe = true

  const isIncreasing = +lineValues[0] < +lineValues[1]
  for (let i = 0; i < lineValues.length; i++) {
    let element = +lineValues[i]
    let nextElement = +lineValues[i + 1]

    if (!isIncreasing) {
      ;[element, nextElement] = [nextElement, element]
    }

    isUnsafe = applyRules(element, nextElement)

    if (!isUnsafe) {
      break
    }
  }
  return isUnsafe
}

function applyRules(a: number, b: number) {
  return !(a >= b || b - a > 3)
}
