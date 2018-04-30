function dijkstraAlgorithm (graph, startNode, endNode) {
  let costAndFatherTable = {}
  // init cost/fatherNode table
  for (let key of Object.keys(graph)) {
    if (key === startNode) continue
    costAndFatherTable[key] = {}
    if (graph[startNode][key]) {
      costAndFatherTable[key].cost = graph[startNode][key]
      costAndFatherTable[key].father = startNode
    } else {
      costAndFatherTable[key].cost = Infinity
      costAndFatherTable[key].father = null
    }
  }
  // a helper function for finding lowest cost in cftable
  let processed = {}
  function findLowestCost (cftable) {
    let lowestNode = ''
    for (let key in cftable) {
      if (processed[key] || key === endNode) continue
      if (!lowestNode || cftable[key].cost < cftable[lowestNode].cost) {
        lowestNode = key
      }
    }
    if (lowestNode) processed[lowestNode] = true // mark as processed
    return lowestNode
  }
  // dijkstra's algorithm start
  // find lowest
  let node = findLowestCost(costAndFatherTable)
  while (node) {
    // update neighbors's cost in cftable
    for (let neighborNode in graph[node]) {
      let latestNeighborCost = costAndFatherTable[node].cost + graph[node][neighborNode]
      if (costAndFatherTable[neighborNode].cost > latestNeighborCost) {
        // update cost
        costAndFatherTable[neighborNode].cost = latestNeighborCost
        // update father
        costAndFatherTable[neighborNode].father = node
      }
    }
    node = findLowestCost(costAndFatherTable)
  }
  // dijkstra's algorithm end

  // return result
  let tempNode = endNode
  let path = []
  while (tempNode) {
    path.unshift({
      node: tempNode,
      cost: costAndFatherTable[tempNode] ? costAndFatherTable[tempNode].cost : 0
    })
    if (costAndFatherTable[tempNode] && costAndFatherTable[tempNode].father) tempNode = costAndFatherTable[tempNode].father
    else tempNode = null
  }
  return path
}


// A directed acyclic graph (DAG)
let graph = {
  start: {
    'a': 6,
    'b': 2
  },
  'a': {
    end: 1
  },
  'b': {
    'a': 3,
    end: 5
  },
  end: {}
}

dijkstraAlgorithm(graph, 'start', 'end').map((node, i) => { console.log(`${i + 1}, node: ${node.node}, cost: ${node.cost} \n`) })
