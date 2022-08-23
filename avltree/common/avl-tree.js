const { Node } = require('./node');

// JavaScript program for insertion in AVL Tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // A utility function to get
  // the height of the tree
  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  // A utility function to get
  // maximum of two integers
  max(a, b) {
    return a > b ? a : b;
  }

  // A utility function to right
  // rotate subtree rooted with y
  // See the diagram given above.
  rightRotate(y) {
    var x = y.left;
    var T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // A utility function to left
  // rotate subtree rooted with x
  // See the diagram given above.
  leftRotate(x) {
    var y = x.right;
    var T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    /* 1. Perform the normal BST insertion */
    if (node == null) return new Node(key);

    if (key < node.key)
      node.left = this.insert(node.left, key);
    else if (key > node.key)
      node.right = this.insert(node.right, key);
    // Duplicate keys not allowed
    else return node;

    /* 2. Update height of this ancestor node */
    node.height =
      1 + this.max(this.height(node.left),
        this.height(node.right));

    /* 3. Get the balance factor of this ancestor
      node to check whether this node became
      unbalanced */
    var balance = this.getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.left.key)
      return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && key > node.right.key)
      return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  /* Given a non-empty binary search tree, return the
node with minimum key value found in that tree.
Note that the entire tree does not need to be
searched. */
  minValueNode(node) {
    let current = node;

    /* loop down to find the leftmost leaf */
    while (current.left != null)
      current = current.left;

    return current;
  }

  deleteNode(root, key) {
    // STEP 1: PERFORM STANDARD BST DELETE
    if (root == null)
      return root;

    // If the key to be deleted is smaller than
    // the root's key, then it lies in left subtree
    if (key < root.key)
      root.left = this.deleteNode(root.left, key);

    // If the key to be deleted is greater than the
    // root's key, then it lies in right subtree
    else if (key > root.key)
      root.right = this.deleteNode(root.right, key);

    // if key is same as root's key, then this is the node
    // to be deleted
    else {

      // node with only one child or no child
      if ((root.left == null) || (root.right == null)) {
        let temp = null;
        if (temp == root.left)
          temp = root.right;
        else
          temp = root.left;

        // No child case
        if (temp == null) {
          temp = root;
          root = null;
        }
        else // One child case
          root = temp; // Copy the contents of
        // the non-empty child
      }
      else {

        // node with two children: Get the inorder
        // successor (smallest in the right subtree)
        let temp = this.minValueNode(root.right);

        // Copy the inorder successor's data to this node
        root.key = temp.key;

        // Delete the inorder successor
        root.right = this.deleteNode(root.right, temp.key);
      }
    }

    // If the tree had only one node then return
    if (root == null)
      return root;

    // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE
    root.height = this.max(this.height(root.left), this.height(root.right)) + 1;

    // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether
    // this node became unbalanced)
    let balance = this.getBalance(root);

    // If this node becomes unbalanced, then there are 4 cases
    // Left Left Case
    if (balance > 1 && getBalance(root.left) >= 0)
      return rightRotate(root);

    // Left Right Case
    if (balance > 1 && getBalance(root.left) < 0) {
      root.left = leftRotate(root.left);
      return rightRotate(root);
    }

    // Right Right Case
    if (balance < -1 && getBalance(root.right) <= 0)
      return leftRotate(root);

    // Right Left Case
    if (balance < -1 && getBalance(root.right) > 0) {
      root.right = rightRotate(root.right);
      return leftRotate(root);
    }

    return root;
  }

  // A utility function to print preorder traversal
  // of the tree.
  // The function also prints height of every node
  preOrder(node) {
    if (node != null) {
      // document.write(node.key +"");
      console.log(node.key + "");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

module.exports = { AVLTree };


