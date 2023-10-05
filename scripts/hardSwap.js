/* Old "hard" swap function that actually swaps the nodes around as opposed to only trading theiir data references. This may come in handy when dealing with lists that have many properties that need to be changed around, or when the swapped nodes aren't similar in terms of property structure and you still want them swapped.
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
  // If node1 is the same node as node2.previous, this means the two are side by side and will be swapped, so we can set node1's .previous to node2.
  node1 !== node2.previous ? node1.previous = node2.previous : node1.previous = node2;
  // If node2 is the same as node1.next, this means the two are side by side and will be swapped, so we can set node2's .next to node1.
  node2 !== nextBackup ? node2.next = nextBackup : node2.next = node1;
  node2.previous = previousBackup;
  // Handle updating adjacent node pointers here as well.
  if(node1 !== this.head) {
    node1.previous.next = node1;
  }
  if(node2 !== this.head) {
    node2.previous.next = node2;
  }
  if(node1 !== this.tail) {
    node1.next.previous = node1;
  }
  if(node2 !== this.tail) {
    node2.next.previous = node2;
  }
  // After swapping the nodes we check if either are now the head or tail. Can make a method for this later to call and check + update tail and head on the passed node
  this.#adjustListBoundaries(node1);
  this.#adjustListBoundaries(node2);
  this.listToConsole();
}
*/