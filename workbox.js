
exports.build = async function build(...args) {
  console.log('args', args)
  return { result: '// plugin' }
}