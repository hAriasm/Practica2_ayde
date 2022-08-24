const { AVLTree } = require("./common/avl-tree");

// Driver code
var tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 9);
tree.root = tree.insert(tree.root, 5);
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 0);
tree.root = tree.insert(tree.root, 6);
tree.root = tree.insert(tree.root, 11);
tree.root = tree.insert(tree.root, -1);
tree.root = tree.insert(tree.root, 1);
tree.root = tree.insert(tree.root, 2);


console.log(
      "Preorder traversal of the" + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);

tree.root = tree.deleteNode(tree.root, 10);

console.log(
      "Preorder traversal of the" + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);

let val = "10";
console.log("buscando nodo " + val);
tree.root = tree.searchNode(tree.root, val);
if (tree.root != null)
      console.log("Resultado: " + tree.root.key);
else
      console.log("No encontrado");