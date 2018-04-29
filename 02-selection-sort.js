// helper
function findSmallestIndex (arr) {
  let smallest = arr[0]
  let smallestIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

// selection sort
function selectionSort (arr) {
  let res = []
  while (arr.length) {
    let smallestIndex = findSmallestIndex(arr)
    res.push(arr[smallestIndex])
    arr.splice(smallestIndex, 1)
  }
  return res
}

// test
let arr = [43, 23, 33, 54, 78, 91, 12, 8, 39, 62]
console.info(selectionSort(arr).toString())
