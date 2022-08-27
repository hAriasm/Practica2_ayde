const { AVLTree } = require("./common/avl-tree");

var tree = new AVLTree();

tree.root = tree.insert(tree.root, 43);
tree.root = tree.insert(tree.root, 18);
tree.root = tree.insert(tree.root, 22);
tree.root = tree.insert(tree.root, 9);
tree.root = tree.insert(tree.root, 21);
tree.root = tree.insert(tree.root, 6);
tree.root = tree.insert(tree.root, 8);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 63);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 62);
tree.root = tree.insert(tree.root, 51);


console.log("Arbol inicial");
tree.preOrder(tree.root);

let val = "18";
tree.root = tree.deleteNode(tree.root, val);

console.log("Arbol despues de eliminar el nodo " + val);
tree.preOrder(tree.root);

val = "22";
tree.root = tree.deleteNode(tree.root, val);

console.log("Arbol despues de eliminar el nodo " + val);
tree.preOrder(tree.root);

console.log("buscando nodo " + val);
let result;
result = tree.searchNode(tree.root, val);
if (result != null)
      console.log("Resultado: " + result.key);
else
      console.log("No encontrado");


console.log("Min: " + tree.minValueNode(tree.root).key);
console.log("Max: " + tree.maxValueNode(tree.root).key);

// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')

// Data which will write in a file.
let data = "Learning how to write in a file."

// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {

      // In case of a error throw err.
      if (err) throw err;
})
