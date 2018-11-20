const PriorityQueue = (() => {
    const items = new WeakMap();
    return class PriorityQueue {
        constructor() {
            items.set(this, []);
        }

        enqueue(item, urgencyLevel) {
            items
                .get(this)
                .push({
                    element: item,
                    priority: urgencyLevel
                });
            // I decided to use JS built in .sort() here. In V8 it uses insertion sort if <= 10 items, and quicksort is greater than 10 items.
            // Mozilla at some point used mergeSort()... If this were purely integers I might consider Radix sorting.
            items.get(this).sort((a,b) => a.priority - b.priority);
        }
    };
})();

const pq = new PriorityQueue();
for(let i = 0; i < 100000; i++) {
    pq.enqueue(String(Math.random() * 10000), Math.floor(Math.random() * 5));
}
