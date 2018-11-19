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
            items.get(this).pop();
        }

        clearAll() {
            items.set(this, [])
        }

        base() {
            if (items.get(this).length > 0) {
                return stack[0];
            } else {
                throw new Error("No items in stack");
            }
        }

        peek() {
            return items.get(this)[items.get(this).length - 1];
        }

        isEmpty() {
            return items.get(this).length === 0;
        }

        size() {
            return items.get(this).length;
        }

        print() {
            console.log("Stack: " + items.get(this).join(", "));
        }
    }
})();

s = new Stack();
s.push(1)
s.push(2)
s.print()
console.log(Object.getPrototypeOf(s))