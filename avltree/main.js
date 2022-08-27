const { AVLTree } = require("./common/avl-tree");

function exportDotFile(data) {
      const fs = require('fs')
      const uniqueFilename = require('unique-filename')
      const randomTmpfile = uniqueFilename('../graph/', 'avltree') + '.dot'

      data = "graph AVLTree {" + data + "\n}";

      fs.writeFile(randomTmpfile, data, (err) => {
            if (err) throw err;
      })

      console.log("archivo " + randomTmpfile + " generado exitosamente\n");
}

function print() {
      tree.printInOrder(tree.root);
      exportDotFile(tree.output);
}


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

console.log("Arbol inicial");
print();

console.log("Insertando 51");
tree.root = tree.insert(tree.root, 51);
print();

let val = "18";
console.log("Eliminando " + val);
tree.root = tree.deleteNode(tree.root, val);
console.log("Arbol despues de eliminar el nodo " + val);
print();

val = "22";
console.log("Eliminando " + val);
tree.root = tree.deleteNode(tree.root, val);
console.log("Arbol despues de eliminar el nodo " + val);
print();

console.log("buscando nodo " + val);
let result;
result = tree.searchNode(tree.root, val);
if (result != null)
      console.log("Resultado: " + result.key);
else
      console.log("No encontrado");


console.log("Min: " + tree.minValueNode(tree.root).key);
console.log("Max: " + tree.maxValueNode(tree.root).key);


