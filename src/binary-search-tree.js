const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
      this.data=data
      this.left=null
      this.right=null
  }
}

module.exports = class BinarySearchTree {

  constructor(){
    this.base=null
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if(!this.base){
    //   return this.base
    // } else{
    //   this.base.data
    // }

    return this.base

    // return 'lol'
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.base=addIn(this.base,data)

    function addIn(node,data){
      if(!node){
        return new Node(data)
      }

      if(node.data===data){
        return node
      }

      if(data<node.data){
        node.left=addIn(node.left,data)
      } else{
        node.right=addIn(node.right,data)
      }

      return node

    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    

    function searchIn(node,data){
      if(!node){
        return false
      }
      if(node.data===data){
        return true
      }

      return data<node.data?searchIn(node.left,data):searchIn(node.right,data)
    }

    return searchIn(this.base,data)
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findIn(this.base,data)

    function findIn(node,data){
      if(!node){
        return null
      }
      if(node.data===data){
        return node
      }

      return data<node.data?findIn(node.left,data):findIn(node.right,data)
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.base=removeNode(this.base,data)

    function removeNode(node,data){
      if(!node){
        return null
      }

      if(data<node.data){
        node.left=removeNode(node.left,data)
        return node
      } else if(data>node.data){
        node.right=removeNode(node.right,data)
        return node
      } else{

        if(!node.left&&!node.right){
          return null
        }

        if(!node.left){
          node=node.right
          return node
        }

        if(!node.right){
          node=node.left
          return node
        }

        let minRight=node.right
        while(minRight.left){
          minRight=minRight.left
        }

        node.data=minRight.data
        node.right=removeNode(node.right,minRight.data)

        return node

      }

    }



  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.base){
      return null
    }

    let node=this.base

    while(node.left){
      node=node.left
    }

    return node.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.base){
      return null
    }

    let node=this.base

    while(node.right){
      node=node.right
    }

    return node.data
  }

}


// const tree = new BinarySearchTree();

// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// // console.log(tree.root());// => 1;

// // console.log(tree.min());
// // tree.min() //=> 1
// // console.log(tree.max());

// // tree.max()// => 5

// // tree.remove(5);
// // console.log(tree.has(5));
// // console.log(tree.find(5));

// // tree.has(5)// => false
// // console.log(tree.max());

// // tree.max()// => 4