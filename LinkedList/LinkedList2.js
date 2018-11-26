const Node = require("./Node2");

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }
    append(element) {
        let new_node = new Node(element);
        if (this.length === 0) {
            this.head = new_node;
        } else {
            let current_node = this.head;
            let previous_node = null;
            while (current_node) {
                previous_node = current_node;
                current_node = current_node.next;
            }
            previous_node.next = new_node;
        }
        this.length += 1;
    }
    size() {
        console.log(this.length);
    }
    print() {
        let current_node = this.head;
        while (current_node) {
            console.log(current_node.element);
            current_node = current_node.next;
        }
    }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.print();
