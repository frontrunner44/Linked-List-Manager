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
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end
  appendNode(data) {
    const newNode = new Node(data); // Creates a new node
    newNode.previous = this.tail; // Sets the new node's "previous" pointer to point to the current tail.
    this.tail.next = newNode; // Sets the current tail's "next" pointer to point to the new node.
    this.tail = newNode; // and finally sets the tail to the new node
  }

  // Add a node to the front of the list.
  prependNode(data) {
    const newNode = new Node(data);
    if(this.head) { // IF a head already exists, we
      this.head.previous = newNode; // set the current head's previous to the new node,
      newNode.next = this.head; // then set the new node's next to the current head
    }
    this.head = newNode; // and finally we set the newNode as the new head of the list irregarddless of whether there was already a head
  }

  // Inserts a node at a specific position in the list.  
  insertNode(data, position) {
    const newNode = new Node(data);
    if(position > this.size+1 || position === 0 || isNaN(position) || data === undefined) { // We use this.size+1 because we want to allow inserting the new node to the end (if the list is 5 long, we can insert 6 to put it in position 6, ie at the end)
      console.log("Invalid position or empty data provided.");
      throw new Error("Invalid position or empty data provided.");
    } else if(position === 1) { // If position is 1, we want to insert the new node at the start of the list into position 1
      this.prependNode(data);
    } else if(position === this.size+1) {
      this.appendNode(data);
    } else { // otherwise if position is not 1 or 1 greater than the list size, we will insert it at the given position, and we'll call a function to retrieve the position BEFORE the position we want to place the new node
      let current = this.getNodeByPosition(position-1); // Grab the position directly BEFORE the position we want to insert the new node so we can place the new node AFTER this node.
      if(current.next) { // If there is a node after the current node,
        current.next.previous = newNode; // we set the "previous" property of the node that comes after the current node to reference the newly created node,
        newNode.next = current.next; // then set the new node's "next" property to reference the node that comes after the current node, since the new node will be placed after the current node
      }
      newNode.previous = current; // Finally, we set the "previous" property of the new node to a reference to the current node and
      current.next = newNode; // set the current node's "next" property to a reference of the new node.
    }
    this.size++;
  }

  listToConsole() {
    let current = this.head;
    let position = 1;
    while(current) {
      console.log(`Node at position ${position}`, current);
      current = current.next;
      position++;
    }
  }

  getNodeByPosition(position) {
    if(position === 0 || this.size < position || isNaN(position)) {
      console.log("Invalid position.");
      throw new Error("Invalid position.");
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
  for(let i = 1; i <= amount; i++) {
    const data = `This should be in position ${i}`; //Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    nodeDatabase.appendNode(data);
  }
}