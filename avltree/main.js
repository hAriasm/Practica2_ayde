const { AVLTree } = require("./common/avl-tree");

// Driver code
var tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/* The constructed AVL Tree would be
      30
      / \
     20 40
    / \   \
   10 25  50
  */
console.log(
      "Preorder traversal of the" + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);

tree.root = tree.deleteNode(tree.root, 20);

console.log(
      "Preorder traversal of the" + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);
