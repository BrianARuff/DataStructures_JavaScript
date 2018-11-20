const Stack = require('./Stack')

const stack = new Stack()
let binaryString = "";

function decToBin(num) {
    while(num > 0) {
        let rem = Math.floor(num % 2);
        stack.push(rem);
        num = Math.floor(num / 2);
    }

    while(!stack.isEmpty()) {
        binaryString += String(stack.pop());
    }
    
    return binaryString;
}

console.log(decToBin(100));
