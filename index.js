import fs from 'node:fs/promises'

const transvoid = JSON.parse(await fs.readFile('transvoid.json', 'utf-8'))

console.log(transvoid)