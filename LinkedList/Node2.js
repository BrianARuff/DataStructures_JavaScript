class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
    print() {
        console.log(this);
    }
}

module.exports = Node;
