'use strict'

const fs = require('fs')
const path = require('path')
const categoryName = '初级'
const basePath = path.join('./', categoryName)
let dirs = fs.readdirSync(basePath)
let fileData = ''
appendToFileData(`## ${categoryName}`)

function appendToFileData (text) {
  fileData += text + '\n'
}

for (let item of dirs) {
  if (item === '.DS_Store') continue
  let categoryDir = path.join(basePath, item)
  const files = fs.readdirSync(categoryDir)
  appendToFileData(`\n### ${item}`)
  for (let file of files) {
    let fileName = file.replace('.js', '')
    let filePath = path.join(categoryDir, file)
    appendToFileData(`* [${fileName}](${filePath})`)
  }
}
console.log(fileData)
