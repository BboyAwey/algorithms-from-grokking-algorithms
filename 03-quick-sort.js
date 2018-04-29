function quickSort (arr) {
  // base case 1
  if (arr.length < 2) return arr
  // base case 2
  else if (arr.length === 2) {
    if (arr[0] < arr[1]) return [arr[0], arr[1]]
    else return [arr[1], arr[0]]
  } else {
    // randomly chose an item as pivot
    let randomIndex = Math.floor(Math.random() * (arr.length - 1))
    let pivot = arr[randomIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
      // avoid pivot
      if (i === randomIndex) continue
      else if (arr[i] < pivot) less.push(arr[i])
      else greater.push(arr[i])
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
  }
}

let arr = [32, 12, 4, 56, 6, 32, 5, 55, 78, 9, 64, 72, 23, 44, 7]

console.log(quickSort(arr).toString())
