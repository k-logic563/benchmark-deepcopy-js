const clonedeep = require('lodash/cloneDeep')

const deepJson = (originData) => {
  let data = null
  for (let i = 0; i < 10000; i++) {
    data = JSON.stringify(originData)
  }
  return data
}

const deepMap = (originData) => {
  let data = null
  for (let i = 0; i < 10000; i++) {
    data = originData.map(d => ({ ...d }))
  }
  return data
}

const deepLodash = (originData) => {
  let data = null
  for (let i = 0; i < 10000; i++) {
    data = clonedeep(originData)
  }
  return data
}

module.exports =  {
  deepJson,
  deepMap,
  deepLodash
}