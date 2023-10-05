// Linked list practice
class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
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
      this.#addFirstNode(newNode); // so we add this new node as the first node
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
      this.#addFirstNode(newNode); // so we add this new node as the first node.
    } else { 
      this.head.previous = newNode; // set the current head's previous to the new node,
      newNode.next = this.head; // then set the new node's next to the current head
      this.head = newNode; // and finally we set the newNode as the new head of the list irregarddless of whether there was already a head
    }
    this.size++;
  }

  // Adds the first node as the tail and head
  #addFirstNode(newNode) {
    this.head = newNode;
    this.tail = newNode;
  }

  // Inserts a node at a specific position in the list.  
  insertNode(data, position) {
    const newNode = new Node(data);
    if(position > this.size+1 || position === 0 || isNaN(position)) { // We use this.size+1 because we want to allow inserting the new node to the end (if the list is 5 long, we can insert 6 to put it in position 6, ie at the end)
      throw new Error("Invalid position.");
    } else if(position === 1) { // If position is 1, we want to insert the new node at the start of the list into position 1
      this.prependNode(data);
    } else if(position === this.size+1) { // If the position is 1 more than the list size, we want this node to be placed at the end of the list and for it to become the new tail
      this.appendNode(data);
    } else { // otherwise if position is not 1 or 1 greater than the list size, we will insert it at the given position, so we'll call a function to retrieve the position BEFORE the position we want to place the new node so we can place the new node after
      let current = this.getNodeByPosition(position-1); // Grab the position directly BEFORE the node that is currently in the position we want to insert the new node so we can place the new node AFTER this node.
      current.next.previous = newNode; // Set the "previous" property of the node that comes after the current node to reference the newly created node,
      newNode.next = current.next; // then set the new node's "next" property to reference the node that comes after the current node, since the new node will be placed after the current node
      newNode.previous = current; // Finally, we set the "previous" property of the new node to a reference to the current node and
      current.next = newNode; // set the current node's "next" property to a reference of the new node.
    }
    this.size++;
    this.listToConsole();
  }

  // Function that will return a node when provided with a node position. Will traverse the list either forwards or backwards, depending on which is faster.
  getNodeByPosition(position) {
    if(this.#isInvalidPosition(position)) {
      throw new Error("Invalid position provided.");
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
      let current = this[edge]; // Sets our starting position to the tail or head
      for(let i = 1; i <= steps; i++) { // starts traversing the next or previous references
        if(i === steps) { // once we've reached our goal iterations, we should be at the requested node, so we return it
          return current;
        } else {
          current = current[direction]; // if we haven't reached our steps yet, we continue traversing either "next" or "previous" references
        }
      }
    }
  }

  // Method to delete nodes by their position.
  deleteNode(position) {
    let current = this.getNodeByPosition(position); // Grabs the node we want to delete
    if(this.size === 1) { // If the node we want to delete is the only node in the list, we essentially empty the list
      this.head = null;
      this.tail = null;
    } else {
      if(current !== this.head) { // If this node is not the head, we
        current.previous.next = current.next; // set the previous node's "next" pointer to point to the same node the current node's next pointer is pointing at
        this.#adjustListBoundaries(current.previous) // and then we check if the previous node's next pointer is now null via the helper function, which would indicate that it is now the tail and handle setting it as the new tail with the helper function
      }
      if(current !== this.tail) { // If this node is not the tail
        current.next.previous = current.previous; // set the next node's "previous" pointer to point at the current node's "previous"
        this.#adjustListBoundaries(current.next) // and then we check if the previous node's previous pointer is now null via the helper function, which would indicate that it is now the head and handle setting it as the new head with the helper function
      }
    }
    // And finally, we disconnect this node from the list and reduce the list size.
    current.next = null;
    current.previous = null;
    this.size--;
    this.listToConsole();
  }

  // Method for grabbing the middle node. Uses the getNodeByPosition helper method.
  getMiddleNode() {
    const result = this.getNodeByPosition(this.size/2);
    console.log(result);
    return result;
  }

  // Swaps the properties of two nodes. This can be a more efficient method of swapping node positions via swapping their data references.
  swapNodeProperties(pos1, pos2, property) {
    const node1 = this.getNodeByPosition(pos1); // Get a refernce to the first node
    const node2 = this.getNodeByPosition(pos2); // Get a reference to the second node
    if(this.#isInvalidPosition(pos1) || this.#isInvalidPosition(pos2) || pos1 === pos2 || property === "next" || property === "previous") {
      throw new Error("Invalid position(s) or property provided.");
    } else if(!node1.hasOwnProperty(property) || !node2.hasOwnProperty(property)) {
      throw new Error ("Both nodes must have the provided property.");
    }
    const node1Prop = node1[property];
    node1[property] = node2[property];
    node2[property] = node1Prop;
    this.listToConsole();
  }

  // This method does a "hard" swap on the nodes, which essentially keeps the nodes in tact and exchanges their .next and .previous references. This is for more complex linked lists where not all nodes are necessarily interchangable via the swapping of their data or other properties.
  swapNodes(pos1, pos2) {
    console.log("Swap called with positions:", pos1, pos2);
    if(this.#isInvalidPosition(pos1) || this.#isInvalidPosition(pos2) || pos1 === pos2) {
      throw new Error("Invalid positions provided.");
    }
    // Grab the nodes by their provided position using the helper function getNodeByPosition. We make it so that node1 < node2 in position with ternary if statements so we can more consistently handle the edge case where the two nodes are side by side.
    let node1 = pos1 < pos2 ? this.getNodeByPosition(pos1) : this.getNodeByPosition(pos2);
    let node2 = pos1 > pos2 ? this.getNodeByPosition(pos1) : this.getNodeByPosition(pos2);
    // Store backups to the node1.next and node1.previous so we don't lose them during the swap
    let previousBackup = node1.previous;
    let nextBackup = node1.next;
    // Swap the nodes .next and .previous pointers.
    node1.next = node2.next;
    // If node1 is the same node as node2.previous, this means the two are side by side and their positions will be flipped, so we can set node1's .previous to node2.
    node1 !== node2.previous ? node1.previous = node2.previous : node1.previous = node2;
    // If node2 is the same as node1.next, this means the two are side by side and their positions will be flipped, so we can set node2's .next to node1.
    node2 !== nextBackup ? node2.next = nextBackup : node2.next = node1;
    node2.previous = previousBackup;
    // Handle updating adjacent node pointers
    node2.next.previous = node2;
    node1.previous.next = node1;
    if(node1 !== this.head) { // we check if node1 was the head before the swap (becaue we haven't updated this.tail and this.head references yet)
      node2.previous.next = node2; // and we adjust node2's .previous node if it wasn't
    }
    if(node2 !== this.tail) { // then we check if node2 was the tail before the swap
      node1.next.previous = node1; // and if it wasn't, we adjust node1's .next node
    }
    // After swapping the nodes we check if either are now the head or tail. Can make a method for this later to call and check + update tail and head on the passed node
    this.#adjustListBoundaries(node1);
    this.#adjustListBoundaries(node2);
    this.listToConsole();
  }

  splice(start, end) {
    if(this.#isInvalidPosition(start) || this.#isInvalidPosition(end) || start >= end) {
      throw new Error("Invalid start and end parameters provided.");
    }
    const newHead = this.getNodeByPosition(start);
    const newTail = this.getNodeByPosition(end);
    const splicedList = new LinkedList();
    splicedList.head = newHead;
    splicedList.tail = newTail;
    splicedList.size = end - start + 1;
    splicedList.listToConsole();
    return splicedList;
  }

  #adjustListBoundaries(node) {
    if(node.previous === null) {
      this.head = node;
    }
    if(node.next === null) {
      this.tail = node;
    }
  }

  // Helper method for other methods that accept a position parameter.
  #isInvalidPosition(position) {
    if(position === 0 || this.size < position || isNaN(position)) {
      return true;
    } else {
      return false;
    }
  }

  listToConsole() {
    let current = this.head;
    let position = 1;
    while(position <= this.size) {
      console.log(`Node at position ${position}`, current);
      current = current.next;
      position++;
    }
  }
}

const myList = new LinkedList;

// Just a test function to generate a linked list.
function generateLinkedList(amount) {
  for(let i = 1; i <= amount; i++) {
    const data = `This should initially be in position ${i}`; //Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    myList.appendNode(data);
  }
  myList.listToConsole();
  console.log(myList);
}