const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {

  
  constructor(){
    this.arr=[]
  }

  push(elem) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.push(elem)
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.pop()
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.arr[this.arr.length-1]
  }
}
