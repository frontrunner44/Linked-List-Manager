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

  // Add a node to the end of the list.
  appendNode(data) {
    console.log("Append called");
    const newNode = new Node(data); // Creates a new node
    if(!this.head) { // If there is no head, the list is empty
      this.addFirstNode(newNode); // so we add this new node as the first node
    } else { 
      newNode.previous = this.tail; // Sets the new node's "previous" pointer to point to the current tail.
      this.tail.next = newNode; // Sets the current tail's "next" pointer to point to the new node.
      this.tail = newNode; // and finally sets the tail to the new node
    }
    this.size++;
  }

  // Add a node to the front of the list.
  prependNode(data) {
    console.log("Prepend called.");
    const newNode = new Node(data);
    if(!this.head) { // If there is no head, the list is empty
      this.addFirstNode(newNode); // so we add this new node as the first node.
    } else { 
      this.head.previous = newNode; // set the current head's previous to the new node,
      newNode.next = this.head; // then set the new node's next to the current head
      this.head = newNode; // and finally we set the newNode as the new head of the list irregarddless of whether there was already a head
    }
    this.size++;
  }

  // Adds the first node as the tail and head
  addFirstNode(newNode) {
    this.head = newNode;
    this.tail = newNode;
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
    console.log(nodeDatabase);
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

  // Function that will return a node when provided with a node position. Will traverse the list either forwards or backwards, depending on which is faster.
  getNodeByPosition(position) {
    if(position === 0 || this.size < position || isNaN(position)) {
      console.log("Invalid position.");
      throw new Error("Invalid position.");
    } else {
      let edge, direction, steps;
      if (position <= this.size / 2) { // If the postition of the requested node is at the first half of the list
        console.log("Traversing forward");
        edge = "head"; // we set the edge to start at to be the head,
        direction = "next"; // the property we traverse to be "next", and
        steps = position; // we set the steps we need to traverses to the position given (we start iterating with i at 1)
      } else { // Otherwise, if the requested node is in the last half of the list, we traverse backwwards and,
        console.log("Traversing backwards");
        edge = "tail"; // set the edge to start at to be the tail,
        direction = "previous"; // then set the property to traverse to be "previous"
        steps = this.size - position + 1; // and we iterate this.size / position + 1 times, since we start iterating at i = 1
      }
      let current = this[edge]; // Sets to tail or head
      for(let i = 1; i <= steps; i++) { // starts traversing the next or previous references
        if(i === steps) { // once we've reached our goal iterations, we should be at the requested node, so we return it
          return current;
        } else {
          current = current[direction]; // if we haven't reached our steps yet, we continue traversing either "next" or "previous" references
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
  nodeDatabase.listToConsole();
  console.log(nodeDatabase);
}