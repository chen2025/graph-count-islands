function getNeighbors(row, col, matrix) {

  let neighbors = [];

  // Up - Northwest - Northeast
  if (row != 0){
    if (matrix[row - 1][col] === 1){
      neighbors.push([row - 1, col]);
    }

    if(col != 0 && matrix[row - 1][col - 1] === 1){
      neighbors.push([row - 1, col - 1]);
    }

    if(col != matrix[0].length - 1 && matrix[row - 1][col + 1] === 1){
      neighbors.push([row - 1, col + 1]);
    }
  }

  // Down - Southeast - Southwest
  if (row != matrix.length - 1){
    if (matrix[row + 1][col] === 1){
      neighbors.push([row + 1, col]);
    }

    if(col != 0 && matrix[row + 1][col - 1] === 1){
      neighbors.push([row + 1, col - 1]);
    }

    if(col != matrix[0].length - 1 && matrix[row + 1][col + 1] === 1){
      neighbors.push([row + 1, col + 1]);
    }
  }

  // Left
  if (col != 0 && matrix[row][col - 1] === 1){
      neighbors.push([row, col - 1]);
  }

  // Right
  if (col != matrix[0].length - 1 && matrix[row][col + 1] === 1){
      neighbors.push([row, col + 1]);
  }

  // Your code here
  return neighbors;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let count = 0;

  // Iterate through all indices in matrix
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      // If an index contains a 1 and has not been visited,

      if (matrix[i][j] === 1 && !visited.has(`${i}, ${j}`)){

        count++;

        let stack = [[i, j]];

        visited.add(`${i}, ${j}`);

        while (stack.length > 0){

          let node = stack.pop();

          let neighbors = getNeighbors(node[0], node[1], matrix);

          for (let i = 0; i < neighbors.length; i++){
            if (!visited.has(`${neighbors[i][0]}, ${neighbors[i][1]}`)){

              visited.add(`${neighbors[i][0]}, ${neighbors[i][1]}`);
              stack.push(neighbors[i]);

            }
          }
        }
      }
      // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        // Initialize a stack with current index
        // Add stringified version of current index to the visited set
        // While stack contains elements
          // Pop element from stack
          // Get valid neighbors of current element
          // Iterate over neigbors
            // If neighbor has not been visited
              // Add neighbor to stack
              // Mark neighbor as visited
    }
    // Return island count
  }
  return count;
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
