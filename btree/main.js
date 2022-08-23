const {BinarySearchTree} = require("./common/binary-search-tree");
const BST =new BinarySearchTree;

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


console.log("Maximo Elemento es "
+ BST.findMax(BST.root));

console.log("Minimo elemento es "
+ BST.findMin(BST.root));

console.log(BST.search(9,BST.root))

BST.inOrder(BST.root)

console.log(BST.remove(27,BST.root))

BST.inOrder(BST.root)