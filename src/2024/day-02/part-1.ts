export default function (blob: string) {
  return blob
    .trim()
    .split('\n')
    .map((line) => parse(line.trim()))
    .filter((isUnsafe) => isUnsafe).length
}

function parse(input: string) {
  const lineValues = input.split(' ')

  let isIncreasing: boolean | null = null
  let isUnsafe = true

  for (let i = 0; i < lineValues.length; i++) {
    let element = +lineValues[i]
    let nextElement = +lineValues[i + 1]

    if (isIncreasing === null) {
      isIncreasing = element < nextElement
    }

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
