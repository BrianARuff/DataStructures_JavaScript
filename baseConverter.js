const Stack = require("./Stack");

function baseConverter(num, base) {
    const stack = new Stack();
    let baseString = "";
    const digits = "0123456789ABCDEF";
    while (num > 0) {
        stack.push(Math.floor(num % base));
        num = Math.floor(num / base);
    }
    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
    }
    return baseString;
}

console.log(baseConverter(100345, 16));
