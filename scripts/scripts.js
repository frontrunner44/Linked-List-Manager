// Linked list practice
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node to the end
  appendNode(data) {
    this.insertNode(data, this.size+1); // calls the insertNode method to insert the new node to the end of the list
  }

  // Add a node to the front of the list.
  prependNode(data) {
    this.insertNode(data, 1); // calls the insertNode method to insert the new node to the beginning of the list
  }

  // Inserts a node at a specific position in the list.  
  insertNode(data, position) {
    let current = this.head;
    const newNode = new Node(data);
    if(position > this.size+1 || position === 0 || isNaN(position)) { // We use this.size+1 because we want to allow inserting the new node to the end (if the list is 5 long, we can insert 6 to put it in position 6, ie at the end)
      console.log("Invalid position.");
      return; // Invalid position
    } else if(position === 1) { // If position is 1, we want to insert the new node at the start of the list into position 1
      if(this.head) { // And ONLY IF a head already exists, we
        this.head.previous = newNode; // set the current head's previous to the new node,
        newNode.next = this.head; // then set the new node's next to the current head
      }
      this.head = newNode; // and finally we set the newNode as the new head of the list irregarddless of whether there was already a head
    } else { // otherwise we will insert it at the given position, and we'll use a for loop to find that position
      current = this.getNodeFromPosition(position-1); // We're going to find the position directly BEFORE the position we want to insert the new node, and then place the new node AFTER.
      if(current.next) { // If there is a next node
        current.next.previous = newNode; // we set the previous node of the current node's next node to the newNode,
        newNode.next = current.next; // then set the newNode's next node to the current node's next node, since the new node will be placed after it
      }
      newNode.previous = current; // Finally, we set the previous node for the newNode as the current node and
      current.next = newNode; // set the current node's next node to the newNode
    }
    this.size++;
  }

  listToConsole() {
    let current = this.head;
    let count = 1;
    while(current) {
      console.log(`Node at position ${count}`, current);
      current = current.next;
      count++;
    }
  }

  getNodeFromPosition(position) {
    if(position === 0 || this.size < position || isNaN(position)) {
      console.log("Invalid position.");
      return;
    } else {
      let current = this.head;
      for(let i = 1; i <= position; i++) {
        if(i === position) {
          return current;
        } else {
          current = current.next;
        }
      }
    }
  }
}

const nodeDatabase = new LinkedList;

function generateLinkedList(amount) {
  for(let i = 0; i < amount; i++) {
    const data = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    const newNode = new Node(data);
    nodeDatabase.appendNode(newNode, i+1);
  }
}