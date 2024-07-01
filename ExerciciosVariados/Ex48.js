// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

var Queue = function() {
    constructor() 
      this.items = []
  };
  
  Queue.prototype.enqueue = function(item) {
    this.items.push(item)
  };
  
  Queue.prototype.dequeue = function() {
    return this.items.shift()
  };
  
  Queue.prototype.size = function() {
      return this.items.length
  };