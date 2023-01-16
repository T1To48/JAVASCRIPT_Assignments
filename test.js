const restaurant = new Map();
​
// Set keys and value pairs
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
console.log(restaurant.set(2, 'Lisbon, Portugal'));
​
// Chaining set methods 
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
​
// Retrieving values
console.log(restaurant.get('name'));
console.log(restaurant.get(true));
console.log(restaurant.get(1));
​
// Examples of utilizing maps
const time = 8;
const getIsOpen = (time, rest) => {
  const isOpen = time > rest.get('open') && time < rest.get('close');
  return rest.get(isOpen);
};
console.log(getIsOpen(time, restaurant));
​
// Checking whether a map has a key
console.log(restaurant.has('categories')); // true
restaurant.delete(2);
​
// Completely clearing a map
// rest.clear();
​
// Storing a graph with map
/*
  In this example, we use a map to store a graph, where the keys are the nodes and the values are arrays of the nodes that the key node is connected to. The keys of the map are numbers, but could be any type of data like objects or strings.
*/
let graph = new Map();
​
// Function to add an edge to the graph
function addEdge(fromNode, toNode) {
  if (!graph.has(fromNode)) {
    graph.set(fromNode, []);
  }
  graph.get(fromNode).push(toNode);
}
​
addEdge(1, 2);
addEdge(2, 3);
addEdge(3, 4);
console.log(graph); // Output: Map(3) { 1 => [ 2 ], 2 => [ 3 ], 3 => [ 4 ] }
console.log(graph.get(1)); // Output: [2]
console.log(graph.get(2)); // Output: [3]
console.log(graph.get(3)); // Output: [4]
​
// Storing a dictionary
/* 
  In this example, we use a map to store a dictionary, where the keys are words and the values are their definitions. The keys of the  map are strings, but could be any type of data like objects or numbers.
*/
let dictionary = new Map();
​
// Function to add a word to the dictionary
function addWord(word, definition) {
  dictionary.set(word, definition);
}
​
// Example usage
addWord("hello", "a greeting used to begin a conversation");
addWord("goodbye", "a farewell remark");
console.log(dictionary.get("hello")); // Output: "a greeting used to begin a conversation"
console.log(dictionary.get("goodbye")); // Output: "a farewell remark"
​
// Storing a grid of data:
/*
  In this example, we use a map to store a grid of data, where the keys are the x and y coordinates of the grid. The keys of the map are numbers but could be any type of data like objects or strings.
*/
let grid = new Map();
​
// Function to add a value to the grid
function addValue(x, y, value) {
  if (!grid.has(x)) {
    grid.set(x, new Map());
  }
  grid.get(x).set(y, value);
}
​
// Example usage
addValue(1, 2, "A");
addValue(3, 4, "B");
addValue(5, 6, "C");
console.log(grid); /* Output: 
      Map(3) {
      1 => Map(1) { 2 => 'A' },
      3 => Map(1) { 4 => 'B' },
      5 => Map(1) { 6 => 'C' }
    }
*/
console.log(grid.get(1).get(2)); // Output: "A"
console.log(grid.get(3).get(4)); // Output: "B"
console.log(grid.get(5).get(6)); // Output: "C"
​
// Storing a tree:
/*
  In this example, we use a map to store a tree, where the keys are the parent nodes and the values are the child nodes. The keys of the map are either null or the value of a node but could be any type of data like objects or numbers.
*/
let tree = new Map();
​
// Function to add a node to the tree
function addNode(parent, value) {
  if (!tree.has(parent)) {
    tree.set(parent, new Map());
  }
  tree.get(parent).set(value, new Map());
}
​
// Example usage
addNode(null, "A");
addNode("A", "B");
addNode("A", "C");
addNode("B", "D");
console.log(tree); /* Output: 
    Map(3) {
      null => Map(1) { 'A' => Map(0) {} },
      'A' => Map(2) { 'B' => Map(0) {}, 'C' => Map(0) {} },
      'B' => Map(1) { 'D' => Map(0) {} }
    }
*/
console.log(tree.get(null)); // Output: Map { "A" => Map {} }
console.log(tree.get("A")); // Output: Map { "B" => Map {}, "C" => Map {} }
console.log(tree.get("B")); // Output: Map { "D" => Map {} }
​
// Iterating maps
// Using for...of loop
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four']
]);
​
// Loop through the entries of the map
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
​
// Output:
// 1 = one
// 2 = two
// 3 = three
// 4 = four
​
/*
  The for...of loop allows us to iterate over the keys and values of the map in a way that is easy to read.
*/
​
// Using forEach method
myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four']
]);
​
// Loop through the entries of the map
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});
​
// Output:
// 1 = one
// 2 = two
// 3 = three
// 4 = four
​
// Using for...of loop on keys and values
myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four']
]);
​
// Loop through the keys of the map
for (let key of myMap.keys()) {
  console.log(key);
}
// Output:
// 1
// 2
// 3
// 4
​
// Loop through the values of the map
for (let value of myMap.values()) {
  console.log(value);
}
// Output:
// one
// two
// three
// four
​
​
// Using while loop
myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four']
]);
​
// Create an iterator for the map
// Iteration protocols - JavaScript | MDN: https://mzl.la/3XvsqDh
let iterator = myMap.entries();
​
// Loop through the entries of the map
while (true) {
  let next = iterator.next();
  if (next.done) {
      break;
  }
  let [key, value] = next.value;
  console.log(key + ' = ' + value);
}
​
// Output:
// 1 = one
// 2 = two
// 3 = three
// 4 = four
​
/*
  In this example, we use a while loop to loop through the entries of the map by creating an iterator using the entries() method. The `next()
*/
​
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
​
console.log("Ori Baram set", new Set('Ori Baram')); // { 'O', 'r', 'i', ' ', 'B', 'a', 'm' }
​
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
​
// Adding to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // will not add again
​
// Deleting an item
ordersSet.delete('Risotto');
​
// ordersSet.clear();
console.log(ordersSet);
​
// Looping over a set
for (const order of ordersSet) console.log(order);
​
// Example for extracting unique items from an array using sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
​
// Log how many unique items are in the array 
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  
// Log how many unique items are in the string
console.log(new Set('oribaram').size);
​
// Create an array based on a set
let mySet = new Set([1, 2, 3, 4]);
​
let setArray = Array.from(mySet);
let arraySet = [...mySet];
console.log(setArray);
console.log(arraySet);
​
// Output:
// [1, 2, 3, 4]
​
// Performing set operations
/*
  In this example, we use sets to perform set operations such as finding the intersection, difference, and union of two sets. The filter method is used to filter out elements that are not in the other set. The spread operator ... is used to convert the set into an array so that we can use the filter method.
*/
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);
​
// Find the intersection of setA and setB
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Output: Set { 3, 4 }
​
// Find the difference of setA and setB
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Output: Set { 1, 2 }
​
// Find the union of setA and setB
let union = new Set([...setA, ...setB]);
console.log(union); // Output: Set { 1, 2, 3, 4, 5, 6 }
​
// Checking for subset
/*
  In this example, we use Set and the every method to check if a set is a subset of another set. The every method is used to check if all elements in the set are also in the other set. The spread operator ... is used to convert the set into an array so that we can use the every method.
*/
setA = new Set([1, 2, 3, 4]);
setB = new Set([1, 2]);
let setC = new Set([5, 6]);
​
// Check if setB is a subset of setA
let isSubset = [...setB].every(x => setA.has(x));
console.log(isSubset); // Output: true
​
// Check if setC is a subset of setA
isSubset = [...setC].every(x => setA.has(x));
console.log(isSubset); // Output: false
​
​
// looping over Sets
// Using for...of loop
/*
  The for...of loop allows us to iterate over the values of the set in a way that is easy to read
*/
mySet = new Set([1, 2, 3, 4]);
​
// Loop through the values of the set
for (let value of mySet) {
    console.log(value);
}
​
// Output:
// 1
// 2
// 3
// 4
​
​
// Using forEach method
mySet = new Set([1, 2, 3, 4]);
​
// Loop through the values of the set
mySet.forEach(function(value) {
    console.log(value);
});
​
// Output:
// 1
// 2
// 3
// 4
​
​
// Using while loop
mySet = new Set([1, 2, 3, 4]);
​
// Create an iterator for the set
iterator = mySet.values();
​
// Loop through the values of the set
while (true) {
    let next = iterator.next();
    if (next.done) {
        break;
    }
    console.log(next.value);
}
​
// Output:
// 1
// 2
// 3
// 4