Sure, here's a README.md for your linked list implementation:

# Doubly Linked List Implementation

This is a JavaScript implementation of a doubly linked list. A doubly linked list is a data structure where each node points to both the next and previous nodes, allowing for efficient traversal in both directions.

## Usage

To use this implementation, you can follow these steps:

1. Create a new instance of the `LinkedList` class:

   ```javascript
   const myList = new LinkedList();
   ```

2. Add nodes to the list using the `appendNode(data)` or `prependNode(data)` methods. For example:

   ```javascript
   myList.appendNode("Node 1");
   myList.appendNode("Node 2");
   myList.prependNode("Node 0");
   ```

3. You can insert nodes at specific positions using the `insertNode(data, position)` method. Position 1 is the front of the list, and position `size + 1` is the end of the list.

   ```javascript
   myList.insertNode("Node 3", 3);
   ```

4. To delete a node at a specific position, use the `deleteNode(position)` method:

   ```javascript
   myList.deleteNode(2); // Deletes the node at position 2
   ```

5. To swap the positions of two nodes in the list, use the `swapNodes(pos1, pos2)` method:

   ```javascript
   myList.swapNodes(1, 3); // Swaps nodes at positions 1 and 3
   ```

6. You can retrieve the middle node of the list using the `getMiddleNode()` method:

   ```javascript
   const middleNode = myList.getMiddleNode();
   ```

7. To print the current state of the list to the console, use the `listToConsole()` method:

   ```javascript
   myList.listToConsole();
   ```

## Methods

- `appendNode(data)`: Adds a node to the end of the list.
- `prependNode(data)`: Adds a node to the front of the list.
- `insertNode(data, position)`: Inserts a node at a specific position in the list.
- `deleteNode(position)`: Deletes a node at a specific position in the list.
- `getMiddleNode()`: Returns the middle node of the list.
- `swapNodes(pos1, pos2)`: Swaps the positions of two nodes in the list.
- `listToConsole()`: Prints the current state of the list to the console.

## Note

This implementation includes methods for handling various scenarios, such as adding nodes, deleting nodes, and swapping nodes, ensuring the integrity of the doubly linked list is maintained.

Feel free to use and modify this implementation as needed for your specific use case.