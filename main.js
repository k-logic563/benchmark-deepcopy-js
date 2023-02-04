const Benchmark = require('benchmark')

const { deepJson, deepMap, deepLodash } = require('./functions')

const originData = [
  {
    key: 'value1',
    key2: 'value2'
  },
  {
    key3: false,
    key4: undefined
  }
]

const suite = new Benchmark.Suite

suite
  .on('start', () => {
    console.log('Test start')
  })
  .add('JSON', () => {
    deepJson(originData)
  })
  .add('Lodash', () => {
    deepLodash(originData)
  })
  .add('Map', () => {
    deepMap(originData)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true }) 