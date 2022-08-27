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
    insertNode(Node,newNode){
        if(newNode.data < Node.data){
            if(Node.left === null) Node.left=newNode;
            else this.insertNode(Node.left,newNode);
        } else{
            if(Node.right === null) Node.right=newNode;
            else this.insertNode(Node.right, newNode);
        }
    }
    //PREORDER
    preOrder(Node) {
      if (Node != null){
        if(Node.left != null){
            console.log(" "+Node.data+"--"+Node.left.data+";");
            this.preOrder(Node.left);
        }
        if(Node.right !== null){
            console.log(" "+Node.data+"--"+Node.right.data+";");
            this.preOrder(Node.right);
        }
    }
  }
    // ENCONTRAR VALOR MAXIMO
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
    // ENCONTRAR VALOR MINIMO
    findMin(Node) {
        if (Node == null) return 2147483647;
 
        var res = Node.data;
        var lres = this.findMin(Node.left);
        var rres = this.findMin(Node.right);
 
        if (lres < res) 
        res = lres;
        if (rres < res) 
        res = rres;
        return res;

      
    }
    // BUSCAR
    search(data)
    {
        if(this.root)
        {
            return "No se encontro el valor";    
        }
        let Node = this.root;

    while(Node){
        if(data<Node.data){
            Node=Node.left;
        }
        else if(data>Node.data){
            Node=Node.right;            
        }
        else if(Node.data===data){
            return Node;
        }
    }
    }


    remove(data){
        if(!this.root){
          return false;
        }
    
        let currentNode = this.root;
        let parentNode = null;
    
        while(currentNode){
          if(data < currentNode.data){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(data > currentNode.data){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.data === data) {
            //We have a Match!
            //Option 1: No right child
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current data, make current left child a child of parent
                if(currentNode.data < parentNode.data) {
                  parentNode.left = currentNode.left;
                
                //if parent < current data, make left child a right child of parent
                } else if(currentNode.data > parentNode.data) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            }else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.data < parentNode.data) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.data > parentNode.data) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            }else{
              //Find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.data < parentNode.data) {
                  parentNode.left = leftmost;
                } else if(currentNode.data > parentNode.data) {
                  parentNode.right = leftmost;
                }
    
            }
          }
          return true;
        }
      }
    }
  
}
module.exports={BinarySearchTree};