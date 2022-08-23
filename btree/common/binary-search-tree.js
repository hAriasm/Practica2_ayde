const{Node}= require ('./node');

class BinarySearchTree{
    constructor (data){
        this.root=null;
    }

    insert(data){
        let newNode= new Node(data);

        if(this.root===null){
            this.root=newNode;
        } else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null) node.left=newNode;
            else this.insertNode(node.left,newNode);
        } else{
            if(node.right === null) node.right=newNode;
            else this.insertNode(node.right, newNode);
        }
    }
    inOrder(node) {
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    findMax(Node){
        if (Node==null)
        return Number.MIN_VALUE;

        let res = Node.data;
        let lres = this.findMax(Node.left);
        let rres = this.findMax(Node.right);

        if (lres > res)
        res = lres;
        if (rres > res)
        res = rres;
        return res;

    }
    findMin(Node) {
        if (Node == null) return 2147483647;
 
        var res = Node.data;
        var lres = this.findMin(Node.left);
        var rres = this.findMin(Node.right);
 
        if (lres < res) res = lres;
        if (rres < res) res = rres;
        return res;

      
    }  
    search(Node, data)
    {
      if(Node === null)
        return null;
     else if(data < Node.data)
        return this.search(Node.left, data);
     else if(data > Node.data)
        return this.search(Node.right, data);
    else
        return Node;
    }
    
    remove(data)
    {
    this.root = this.removeNode(this.root, data);
    }

    removeNode(Node, key)
    {
      if(Node === null)
        return null;
     else if(key < Node.data)
    {
        Node.left = this.removeNode(Node.left, key);
        return Node;
    }
 
      else if(key > Node.data)
    {
        Node.right = this.removeNode(Node.right, key);
        return Node;
    }
 
    else
    {
        if(Node.left === null && Node.right === null)
        {
            Node = null;
            return Node;
        }
 
        if(Node.left === null)
        {
            Node = Node.right;
            return Node;
        }
         
        else if(Node.right === null)
        {
            Node = Node.left;
            return Node;
        }

        var aux = this.findMinNode(Node.right);
        Node.data = aux.data;
 
        Node.right = this.removeNode(Node.right, aux.data);
        return Node;
    }
 
}
}
module.exports={BinarySearchTree};