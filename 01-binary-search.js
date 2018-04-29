// prepare data
let BIG_ARRAY = []
for (let i = 0; i < 10000000; i++) {
  BIG_ARRAY.push(i)
}

// sequential search
function sequentialSearch (array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) return true
  }
  return false
}

// binary search function
function binarySearch (array, item) {
  let low = 0
  let high = array.length - 1
  while (low < high) {
    let middle = Math.floor((high + low) / 2)
    let guess = array[middle]
    if (item === guess || item === low || item === high) return true
    else if (guess < item) low = middle + 1
    else if (guess > item) high = middle - 1
  }
  return false
}

// test
console.log('--------binary search start')
let startTime = (new Date().getTime())
console.log('Result is: ', binarySearch(BIG_ARRAY, 9999998))
let endTime = (new Date().getTime())
console.log('Time use: ' + (endTime - startTime) + 'ms')
console.log('--------binary search end')

console.log('--------sequential search start')
startTime = (new Date().getTime())
console.log('Result is: ', sequentialSearch(BIG_ARRAY, 9999998))
endTime = (new Date().getTime())
console.log('Time use: ' + (endTime - startTime) + 'ms')
console.log('--------sequential search end')
