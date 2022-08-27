const {BinarySearchTree} = require("./common/binary-search-tree");
const BST =new BinarySearchTree;

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

console.log("Maximo Elemento es : "
+ BST.findMax(BST.root));

console.log("Minimo elemento es : "
+ BST.findMin(BST.root));


console.log(BST.search(15,BST.root));

//valor = 41
//console.log(BST.remove(valor,BST.root));
//ST.insert(105);
//BST.insert(93);

console.log(BST.preOrder(BST.root));

//console.log(BST.root);

//console.log(BST.remove(15,BST.root));

//console.log(BST.inOrder(BST.root));

//console.log(BST.root);
