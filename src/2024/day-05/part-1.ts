export default function (blob: string) {
  const input = blob.trim().split('\n\n')
  const rules = parseRules(input[0])
  const pages = parsePages(input[1])

  return pages
    .filter((page) => validate(rules, page))
    .map((page) => page[Math.floor(page.length / 2)])
    .reduce((sum, value) => sum + +value)
}

function parsePages(pages: string) {
  return pages.split('\n').map((page) => page.trim().split(',').map(Number))
}

function parseRules(rules: string) {
  return rules.split('\n').map((rule) => rule.split('|').map(Number))
}

function validate(rules: number[][], page: number[]) {
  for (let [a, b] of rules) {
    if (page.indexOf(a) === -1) continue
    if (page.indexOf(b) === -1) continue
    if (page.indexOf(a) > page.indexOf(b)) return false
  }
  return true
}
