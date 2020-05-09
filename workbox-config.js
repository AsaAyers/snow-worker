const fs = require('fs') 

function buildImport(prefix) {
  const files = fs.readdirSync("build/")

  const realName = files.find(
    f => f.indexOf(prefix) === 0
  )
  if (!realName){ 
    throw new Error(`Error processing prefix: ${prefix}`)
  }

  return realName
}

module.exports = {
  "globDirectory": "build/",
  "importScripts": [
    "push.sw"
  ].map(buildImport),
  "globPatterns": [
    "**/*.{css,js,svg,ico,html,txt,json}"
  ],
  "swDest": "build/sw.js"
};



