const Benchmark = require('benchmark')

const { deepJson, deepStructure, deepLodash } = require('./functions')

const originData = {
  key1: 'value1',
  key2: 'value2',
}

const suite = new Benchmark.Suite

suite
  .on('start', () => {
    console.log('Test start')
  })
  .add('JSON', () => {
    deepJson(originData)
  })
  .add('Structure', () => {
    deepStructure(originData)
  })
  .add('Lodash', () => {
    deepLodash(originData)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true }) 