const data = {
  key1: 'value1',
  key2: function() { console.log('hello') },
}

const deepcopy = structuredClone(data)
data.key1 = 'update'
console.log(data)
console.log(deepcopy)