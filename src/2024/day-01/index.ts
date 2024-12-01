import { resolve } from 'node:path'

import part1 from './part-1'
import part2 from './part-2'

async function main() {
  let data = await Bun.file(
    resolve(__dirname, '../../../data/2024-01.txt')
  ).text()

  {
    let result = part1(data)
    console.log('Result:', result)
  }

  {
    let result = part2(data)
    console.log('Result:', result)
  }
}

main()
