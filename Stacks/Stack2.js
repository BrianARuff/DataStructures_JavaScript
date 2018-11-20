// Practice making a stack from memory...

const Stack = (() => {
    let items = new WeakMap()
    return class Stack {
        constructor() {
            items.set(this, []);
        }
        push(item) {
            items.get(this).push(item);
        }
        pop() {
            return items.get(this).pop();
        }
        print() {
            console.log(items.get(this));
        }
    }
})()

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.print();