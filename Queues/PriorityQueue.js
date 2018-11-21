class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(item, priority) {
        // this.queue.push({item, priority});
        // this.queue.sort((a, b) => a.priority - b.priority)
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (priority < this.queue[i].priority) {
                this.queue.splice(i, 0, { item, priority });
                added = true;
                break;
            }
        }
        if (!added) {
            this.queue.push({ item, priority });
        }
    }
    dequeue() {
        return this.queue.shift();
    }
    print() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}

const pq = new PriorityQueue();
pq.enqueue("Brian", 1);
pq.enqueue("Shawn", 2);
pq.enqueue("Doris", 3);
pq.enqueue("Mahayla", 0);
pq.enqueue("Logan", 0);
pq.print();
