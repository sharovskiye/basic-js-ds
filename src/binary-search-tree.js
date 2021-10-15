const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(value){
      this.value=value
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
    return this.base.value
    // return 'lol'
  }

  add(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.base=addIn(this.base,value)

    function addIn(node,value){
      if(!node){
        return new Node(value)
      }

      if(node.value===value){
        return node
      }

      if(value<node.value){
        node.left=addIn(node.left,value)
      } else{
        node.right=addIn(node.right,value)
      }

      return node

    }
  }

  has(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchIn(this.base,value)

    function searchIn(node,value){
      if(!node){
        return false
      }
      if(node.value===value){
        return true
      }

      return value<node.value?searchIn(node.left,value):searchIn(node.right,value)
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}


// const tree = new BinarySearchTree();

// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// console.log(tree.root());
 // => 1;

// tree.min() //=> 1

// tree.max()// => 5

// tree.remove(5);

// tree.has(5)// => false

// tree.max()// => 4