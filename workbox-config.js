const fs = require('fs') 


const config = {
  "globDirectory": "snow-worker/",
  "importScripts": [
    "push.sw"
  ],
  "globPatterns": [
    "**/*.{css,js,svg,ico,html,txt,json}"
  ],
  "swDest": "snow-worker/sw.js"
};

function buildImport(globDirectory, prefix) {
  const files = fs.readdirSync(globDirectory)

  const realName = files.find(
    f => f.indexOf(prefix) === 0
  )
  if (!realName){ 
    throw new Error(`Error processing prefix: ${prefix}`)
  }

  return realName
}

function remapImports(config) {
  const importScripts = config.importScripts.map(
    prefix => buildImport(config.globDirectory, prefix)
  )

  return {
    ...config,
    importScripts
  }
}


module.exports = remapImports(config)