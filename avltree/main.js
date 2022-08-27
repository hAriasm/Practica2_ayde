const { AVLTree } = require("./common/avl-tree");

function exportDotFile(data) {
  const fs = require("fs");
  const uniqueFilename = require("unique-filename");
  const randomTmpfile = uniqueFilename("../graph/", "avltree") + ".dot";

  data = "graph AVLTree {" + data + "\n}";

  fs.writeFile(randomTmpfile, data, (err) => {
    if (err) throw err;
  });

  console.log("archivo " + randomTmpfile + " generado exitosamente\n");
}

function print() {
  tree.printInOrder(tree.root);
  exportDotFile(tree.output);
}
var tree = new AVLTree();
executeInsertNodo();
executeIniciarArbol();
let val = "51";
executeInsertNodo(val);
val = "18";
executeEliminarNodo(val);
val = "22";
executeEliminarNodo(val);
executeBuscar(val);
val = "21"
executeBuscar(val);
executeImprimirMinimo();
executeImprimirMaximo();

function executeIniciarArbol() {
      console.log("Arbol inicial");
      print();
}

function executeInsertNodo(val) {
      console.log("Insertando " + val);
      tree.root = tree.insert(tree.root, val);
      print();
}

function executeEliminarNodo(val) {
      console.log("Eliminando " + val);
      tree.root = tree.deleteNode(tree.root, val);
      console.log("Arbol despues de eliminar el nodo " + val);
      print();
}

function executeImprimirMaximo() {
      console.log("valor Máximo: " + tree.maxValueNode(tree.root).key);
}

function executeImprimirMinimo() {
      console.log("valor Mínimo: " + tree.minValueNode(tree.root).key);
}

function executeInsertNodo() {
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
}

function executeBuscar(val) {
console.log("Buscando nodo " + val);
let result = tree.searchNode(tree.root, val);
      if (result != null) {
            console.log("Se encontro el nodo");
            console.log("Resultado: " + result.key);
      } else {
            console.log("No encontrado");
      }
}

