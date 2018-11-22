const Queue = require("./Queues");

// Game of hot potatoe using Ciurcular Queue logic
function circularQueue(list, num) {
    let q = new Queue();
    for (let i = 0; i < list.length; i++) {
        q.enqueue(list[i]);
    }
    let eliminated = "";
    while (q.size() > 1) {
        for (let i = 0; i < num; i++) {
            q.enqueue(q.dequeue());
        }
        eliminated = q.dequeue();
        console.log(eliminated + " was eliminated from the game.");
    }
    console.log(q.dequeue() + " wins the game!");
}

circularQueue(["Brian", "Shawn", "Doris", "Mahayla", "Logan"], 0);