// use breadth first search algorithm to search if 2 person related in a graph
function breadthFirstSearch (graph, a, b) {
  let queue = []
  let searched = {}
  queue.push(a) // init queue with one person
  while (queue.length) {
    let current = queue.shift()
    if (searched[current]) continue // check if the person has been searched first
    if (current === b) return true
    else {
      searched[current] = true
      for (let person of graph[current]) queue.push(person)
    }
  }
  return false
}

// a directed graph shows the relations between people
// each value shows all the related person of one guy
let relationshipGraph = {
  'awey': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': []
}

// test
console.log(breadthFirstSearch(relationshipGraph, 'awey', 'peggy')) // true
console.log(breadthFirstSearch(relationshipGraph, 'anuj', 'thom')) // false
