const { Node } = require('./node');

class AVLTree {

  output = "";

  constructor() {
    this.root = null;
  }

  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  max(a, b) {
    return a > b ? a : b;
  }

  rightRotate(y) {
    var x = y.left;
    var T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;

    return x;
  }

  leftRotate(x) {
    var y = x.right;
    var T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;

    return y;
  }

  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    if (node == null) return new Node(key);

    if (key < node.key)
      node.left = this.insert(node.left, key);
    else if (key > node.key)
      node.right = this.insert(node.right, key);
    else return node;

    node.height =
      1 + this.max(this.height(node.left),
        this.height(node.right));

    var balance = this.getBalance(node);

    if (balance > 1 && key < node.left.key)
      return this.rightRotate(node);

    if (balance < -1 && key > node.right.key)
      return this.leftRotate(node);

    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  minValueNode(node) {
    let current = node;

    while (current.left != null)
      current = current.left;

    return current;
  }

  maxValueNode(node) {
    let current = node;

    while (current.right != null)
      current = current.right;

    return current;
  }

  deleteNode(root, key) {
    if (root == null)
      return root;

    if (key < root.key)
      root.left = this.deleteNode(root.left, key);

    else if (key > root.key)
      root.right = this.deleteNode(root.right, key);

    else {

      if ((root.left == null) || (root.right == null)) {
        let temp = null;
        if (temp == root.left)
          temp = root.right;
        else
          temp = root.left;

        if (temp == null) {
          temp = root;
          root = null;
        }
        else
          root = temp;
      }
      else {

        let temp = this.minValueNode(root.right);

        root.key = temp.key;

        root.right = this.deleteNode(root.right, temp.key);
      }
    }

    if (root == null)
      return root;

    root.height = this.max(this.height(root.left), this.height(root.right)) + 1;

    let balance = this.getBalance(root);

    if (balance > 1 && this.getBalance(root.left) >= 0)
      return this.rightRotate(root);

    if (balance > 1 && this.getBalance(root.left) < 0) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    if (balance < -1 && this.getBalance(root.right) <= 0)
      return this.leftRotate(root);

    if (balance < -1 && this.getBalance(root.right) > 0) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  searchNode(root, key) {
    if (root == null)
      return root;

    if (root.key == key)
      return root;

    else if (key < root.key)
      return this.searchNode(root.left, key);

    else if (key > root.key)
      return this.searchNode(root.right, key);

    return root;
  }

  preOrder(node) {
    if (node != null) {
      if (node.left != null) {
        this.output += "\n  " + node.key + " -- " + node.left.key + ";";
        this.preOrder(node.left);
      }
      if (node.right != null) {
        this.output += "\n  " + node.key + " -- " + node.right.key + ";";
        this.preOrder(node.right);
      }
    } 
  }

  print(node) {
    this.output = "";
    this.preOrder(node);
  }
}

module.exports = { AVLTree };


