const Stack = (() => {
    const items = new WeakMap();
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

        clearAll() {
            items.set(this, []);
        }

        isEmpty() {
            return items.get(this).length === 0;
        }

        base() {
            return items.get(this)[0]
        }

        peek() {
            return items.get(this)[items.get(this).length - 1];
        }

        size() {
            return items.get(this).length;
        }

        print() {
            console.log("Stack: " + items.get(this).join(", "));
        }
    };
})();

module.exports = Stack;