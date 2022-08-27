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


console.log(
      "Arbol inicial"
);
tree.preOrder(tree.root);

let val = "50";
tree.root = tree.deleteNode(tree.root, val);

console.log(
      "Arbol despues de eliminar el nodo " + val
);
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
