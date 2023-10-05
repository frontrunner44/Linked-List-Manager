```markdown
# Doubly Linked List Implementation

This is a JavaScript implementation of a doubly linked list. A doubly linked list is a data structure where each node points to both the next and previous nodes, allowing for efficient traversal in both directions.

## Usage
To test and experiment with the LinkedList class, you can open the `index.html` file in your web browser and access the browser's developer console. The included test functions and examples demonstrate how to use the LinkedList class to create and manipulate linked lists.

Please note that the `index.html` file is included solely for interactive testing purposes and is not required for using the LinkedList class in other JavaScript environments.

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

8. You can also splice a portion of the list into a new linked list using the `splice(start, end)` method:

   ```javascript
   const spliced = myList.splice(2, 4); // Creates a new linked list from positions 2 to 4
   ```

9. To swap the properties of two nodes, use the `swapNodeProperties(pos1, pos2, property)` method:

   ```javascript
   myList.swapNodeProperties(1, 3, "data"); // Swaps the data properties of nodes at positions 1 and 3
   ```

## Methods

- `appendNode(data)`: Adds a node to the end of the list.
- `prependNode(data)`: Adds a node to the front of the list.
- `insertNode(data, position)`: Inserts a node at a specific position in the list.
- `deleteNode(position)`: Deletes a node at a specific position in the list.
- `getMiddleNode()`: Returns the middle node of the list.
- `swapNodes(pos1, pos2)`: Swaps the positions of two nodes in the list.
- `swapNodeProperties(pos1, pos2, property)`: Swaps the properties of two nodes.
- `splice(start, end)`: Creates a new linked list from a portion of the original list.
- `listToConsole()`: Prints the current state of the list to the console.

## Note

This implementation includes methods for handling various scenarios, such as adding nodes, deleting nodes, swapping nodes, and more, ensuring the integrity of the doubly linked list is maintained. When manipulating nodes, the list will be traversed forward or backward automatically, depending on which is faster.

```

You can copy and paste this updated README.md into your project. If you need any further modifications or have additional information to add, please let me know!
