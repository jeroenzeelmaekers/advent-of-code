export default function (blob: string) {
  return blob
    .trim()
    .split('\n')
    .map((line) => parse(line.trim()))
    .filter((isUnsafe) => isUnsafe).length
}

function parse(input: string) {
  const report = input.split(' ')

<<<<<<< Updated upstream
  let isIncreasing: boolean | null = null
  let isUnsafe = true

  for (let i = 0; i < lineValues.length; i++) {
    const element = +lineValues[i]
    const nextElement = +lineValues[i + 1]
=======
  let isSafe = true

  const isIncreasing = +report[0] < +report[1]
  for (let i = 0; i < report.length; i++) {
    let element = +report[i]
    let nextElement = +report[i + 1]
>>>>>>> Stashed changes

    if (isIncreasing === null) {
      if (element < nextElement) {
        isIncreasing = true
      } else if (element > nextElement) {
        isIncreasing = false
      } else {
        isUnsafe = false
        break
      }
    }

<<<<<<< Updated upstream
    if (isIncreasing) {
      isUnsafe = applyRules(element, nextElement)
    }

    if (!isIncreasing) {
      isUnsafe = applyRules(nextElement, element)
    }
=======
    isSafe = applyRules(element, nextElement)
>>>>>>> Stashed changes

    if (!isSafe) {
      break
    }
  }
  return isSafe
}

function applyRules(a: number, b: number) {
  return !(a >= b || b - a > 3)
}
