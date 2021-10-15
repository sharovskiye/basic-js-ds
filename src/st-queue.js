const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

module.exports = class Queue {

  constructor(){
    this.head=null
    this.tail=null
    this.length=0
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let node=new Node(value)

    if(this.head){
      this.tail.next=node
      this.tail=node
    } else{
      this.head=node
      this.tail=node

    }
    this.length++
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
 let current=this.head
 this.head=this.head.next
 this.length--
 return current.value
  }

}
