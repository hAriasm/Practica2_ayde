const {BinarySearchTree} = require("./common/binary-search-tree");
const BST =new BinarySearchTree;

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
console.log(BST.preOrder(BST.root));

//INSERCION DE 2 NODOS
nodo1=93
nodo2=105
BST.insert(nodo1);
BST.insert(nodo2);
console.log("Se ha insertado 2 Nodos : "+ nodo1+" "+nodo2);
console.log(BST.preOrder(BST.root));

// DELETE DE 1 NODO CON 2 HIJOS
valor = 99
console.log(BST.remove(valor,BST.root));
console.log("Delete de 1 Nodo con 2 hijos: " + valor);
console.log(BST.preOrder(BST.root));

// DELETE DE NODO RAIZ
valor = 41
console.log(BST.remove(valor,BST.root));
console.log("Delete de Nodo Raiz: " + valor);
console.log(BST.preOrder(BST.root));

// BUSQUEDA DE UN VALOR EXISTENTE
valor = 91
console.log("Resultado de la busqueda de: " + valor);
console.log(BST.search(91,BST.root));
//console.log(BST.root);

// BUSQUEDA DE UN VALOR BORRADO
valor = 41
console.log("Resultado de la busqueda de: " + valor);
console.log(BST.search(valor,BST.root));
//console.log(BST.root);

// BUSQUEDA DEL MINIMO
console.log("Maximo Elemento es : ");
console.log(BST.findMax(BST.root));

// BUSQUEDA DEL MAXIMO
console.log("Minimo elemento es : ");
console.log(BST.findMin(BST.root));
