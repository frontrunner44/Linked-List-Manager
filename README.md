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

2. Add nodes to the list using the `append(data)` or `prepend(data)` methods. For example:

   ```javascript
   myList.append("Node 1");
   myList.append("Node 2");
   myList.prepend("Node 0");
   ```

3. You can insert nodes at specific positions using the `insert(data, position)` method. Position 1 is the front of the list, and position `size + 1` is the end of the list.

   ```javascript
   myList.insert("Node 3", 3);
   ```

4. To delete a node at a specific position, use the `delete(position)` method:

   ```javascript
   myList.delete(2); // Deletes the node at position 2
   ```

5. To swap the positions of two nodes in the list, use the `swap(pos1, pos2)` method:

   ```javascript
   myList.swap(1, 3); // Swaps nodes at positions 1 and 3
   ```

6. You can retrieve the middle node of the list using the `getMiddleNode()` method:

   ```javascript
   const middleNode = myList.getMiddleNode();
   ```

7. To print the current state of the list to the console, use the `log` method:

   ```javascript
   myList.log();
   ```

8. You can splice a portion of the list into a new linked list using the `splice(start, end)` method:

   ```javascript
   const spliced = myList.splice(2, 4); // Creates a new linked list from positions 2 to 4
   ```

9. To swap the properties of two nodes, use the `swapProperties(pos1, pos2, property)` method:

    ```javascript
    myList.swapProperties(1, 3, "data"); // Swaps the data properties of nodes at positions 1 and 3
    ```

10. You can search for nodes based on specific properties and values using the `search(property, value)` method. This method scans through the data objects of each node in the list and returns an array containing all nodes that match the provided criteria.
   
    ```javascript
    let searchResult = myList.search("Name", "Shaun"); // Returns all nodes with an object property "Name" containing the value "Shaun".
    ```

11. You can reverse the linked list by using the `reverse()` method:
    ```javascript
    myList.reverse() // Will reverse the linked list by inverting each node's .next and .previous pointers.
    ```

12. You can remove nodes with duplicate data by using the `removeDuplicates()` method:
    ```JavaScript
    myList.removeDuplicates() // Removes any nodes containing duplicate data
    ```

13. You can return a node by its position using the `getNodeByPosition(pos)` method:
    ```JavaScript
    myList.getNodeByPosition(2); // Returns the node that occupies the second position in the linked list.
    ```
14. You can return a deep copy of the linked list using the `deepClone()` method:
    ```JavaScript
    const myNewList = myList.deepClone() // Makes myNewList a deep clone of myList.
    ```
15. You can return a spliced deep copy of the linked list using the `deepSplice()` method:
    ```JavaScript
    const myNewSplicedList = myList.deepSplice(5,10) // Makes myNewSplicedList a deep clone of myList starting from node position 5 to node position 10.
    ```

## Methods

- `append(data)`: Adds a node to the end of the list.
- `prepend(data)`: Adds a node to the front of the list.
- `insert(data, position)`: Inserts a node at a specific position in the list.
- `delete(position)`: Deletes a node at a specific position in the list.
- `getMiddleNode()`: Returns the middle node of the list.
- `swap(pos1, pos2)`: Swaps the positions of two nodes in the list.
- `swapProperties(pos1, pos2, property)`: Swaps the properties of two nodes.
- `splice(start, end)`: Returns a new linked list from a portion of the original list.
- `log`: Prints the current state of the list to the console.
- `search(property, value)`: returns an array containing all nodes with data matching the search criteria.
- `reverse()`: reverses the linked list.
- `removeDuplicates()`: finds and removes nodes with duplicate data.
- `getNodeByPosition(position)`: returns the node occupying the specified position.
- `deepClone()`: Creates a deep copy of the entire linked list, including all nodes and their data.
- `deepSplice(start, end)`: Returns a spliced, deep copy of the linked list, preserving the structure of the original linked list from positions start to end.

## Note

This implementation includes methods for handling various scenarios, such as adding nodes, deleting nodes, swapping nodes, and more, ensuring the integrity of the doubly linked list is maintained. When manipulating nodes, the list will be traversed forward or backward automatically, depending on which is faster.

Feel free to use and modify this implementation as needed for your specific use case.
