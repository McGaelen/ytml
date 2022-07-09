import YAML from 'yaml'
import * as cheerio from 'cheerio'
import * as fs from 'fs'
import traverse from "traverse";

const ytmlFile = fs.readFileSync('testfiles/htyaml.ytml', 'utf8')
const ytml = YAML.parse(ytmlFile)
console.log(ytml)

// Root of document must either be a single key of 'html' whose value is an array,
// or a top-level array.
const root = ytml.html || ytml
const $ = cheerio.load('<html></html>')

traverse(root).forEach(function (node) {
  if (!this.isRoot) console.log(this.path)
})
