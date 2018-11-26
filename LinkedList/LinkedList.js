const Node = require("./Node");

// -- Notes -- Linked list are like arrays but each element is not contigiously stored in memeory. Each element is composed of a node that references itself and a pointer to the next node. Linked lists do not require element shifting when inserting or removing items from the linked list. On the down side, you must access a linked list with O(n) complexity and array items can be accessed with O(1) complexity. Linked lists are like train carts, one linked to the next one.

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(element) {
        // First check if the head of the linked list is null, if it is then set it to the new node.
        if (this.head === null) {
            this.head = new Node(element);
            // If it's not the first node then set the current node value to the current_node's next value untill the current node's next value is null.
        } else {
            let curr = this.head;
            let newNode = new Node(element);
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        // Increment length everytime an element is appended to the end of the linked list.
        this.length += 1;
    }
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(element);
            let curr_node = head;
            let prev;
            let index = 0;
            if (position === 0) {
                node.next = curr_node;
                this.head = node;
            } else {
                while (index++ < position) {
                    prev = curr_node;
                    curr_node = curr_node.next;
                }
                node.next = curr_node;
                prev.next = curr_node.next;
            }
            this.length += 1;
            return true;
        } else {
            return false;
        }
    }
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let curr_node = this.head;
            let prev;
            let index = 0;
            if (position === 0) {
                this.head = curr_node.next;
            } else {
                while (index++ < position) {
                    prev = curr_node;
                    curr_node = curr_node.next;
                }
                prev.next = curr_node.next;
            }
            this.length -= 1;
            return curr_node.element;
        } else {
            return null;
        }
    }
    remove(element) {}
    indexOf(element) {}
    isEmpty() {}
    size() {
        console.log("Length: " + this.length);
    }
    toString() {}
    print() {
        let curr = this.head;
        while(curr.next) {
            console.log(curr.element);
            curr = curr.next;
        }
    }
}

let ll = new LinkedList();
ll.append(15);
ll.append(10);
ll.append(20);
ll.size();
ll.print();
