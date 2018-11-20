const Queue = (() => {
    const items = new WeakMap();
    return class Queue {
        constructor() {
            items.set(this, []);
        }

        enqueue(item) {
            items.get(this).push(item);
        }

        dequeue() {
            return items.get(this).shift();
        }

        front() {
            return items.get(this)[0];
        }

        isEmpty() {
            return items.get(this).length === 0;
        }

        size() {
            return items.get(this).length;
        }
        
        print() {
            console.log("Queue: " + items.get(this).join(", "));
        }
    };
})();

const q = new Queue();
q.enqueue("Brian");
q.enqueue("Johnny");
q.enqueue("Chris");
// console.log(q.dequeue());
console.log(q.size());
// q.dequeue();
console.log(q.isEmpty());
console.log(q.front());
q.print()
