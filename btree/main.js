const {BinarySearchTree} = require("./common/binary-search-tree");
const BST =new BinarySearchTree;

function exportDotFile(data) {
    const fs = require('fs')
    const uniqueFilename = require('unique-filename')
    const randomTmpfile = uniqueFilename('../graph/', 'Btree') + '.dot'

    data = "graph Btree {" + data + "\n}";

    fs.writeFile(randomTmpfile, data, (err) => {
          if (err) throw err;
    })

    console.log("archivo " + randomTmpfile + " generado exitosamente\n");
}

function print() {
    BST.printInOrder(BST.root);
    exportDotFile(BST.output);
}


// CREACION DE BTREE E INSERCION DE NODOS
BST.insert(41);
BST.insert(20);
BST.insert(65);
BST.insert(11);
BST.insert(29);
BST.insert(50);
BST.insert(91);
BST.insert(32);
BST.insert(72);
BST.insert(99);

// ARBOL INICIAL
console.log("Arbol Inicial");
print();

//INSERCION DE 2 NODOS
nodo1=93;
nodo2=105;
BST.insert(nodo1);
BST.insert(nodo2);
console.log("Se ha insertado 2 Nodos : "+ nodo1+" "+nodo2);
print();

// DELETE DE 1 NODO CON 2 HIJOS
valor = 99;
console.log(BST.remove(valor,BST.root));
console.log("Delete de 1 Nodo con 2 hijos: " + valor);
print();

// DELETE DE NODO RAIZ
valor = 41;
console.log(BST.remove(valor,BST.root));
console.log("Delete de Nodo Raiz: " + valor);
print();

// BUSQUEDA DE UN VALOR EXISTENTE
valor = 91;
console.log("Resultado de la busqueda de: " + valor);
console.log(BST.searchNode(valor,BST.root));
//console.log(BST.root);

// BUSQUEDA DE UN VALOR BORRADO
valor = 41
console.log("Resultado de la busqueda de: " + valor);
console.log(BST.searchNode(valor,BST.root));
//console.log(BST.root);

// BUSQUEDA DEL MINIMO
console.log("Maximo Elemento es : ");
console.log(BST.findMax(BST.root));

// BUSQUEDA DEL MAXIMO
console.log("Minimo elemento es : ");
console.log(BST.findMin(BST.root));
