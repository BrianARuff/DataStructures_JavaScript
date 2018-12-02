function characterCounter(str) {
    // Error Handling
    // No input
    if (!str) {
        return "String input required";
    }

    // attempt to type cast non strings
    if (typeof str !== "string") {
        str = str.toString();
        // input could not be successfully type casted
        if (typeof str !== "string") {
            return "Invalid input";
        }
    }

    const stringLen = str.length;
    const result = {};
    let i = 0;

    // loop through each character for O(n) time complexity and O(n) space complexity
    // sense the object grows based on input size
    for (; i < stringLen; i++) {
        // If string not in object as a key then add it and value to zero
        if (result[str[i]] === undefined && str[i] !== " ") {
            result[str[i].toLowerCase()] = 1;
        } else {
            if (str[i] !== " ") {
                // else add one to value
                result[str[i]]++;
            }
        }
    }
    return result;
}

// Returns an object which allows O(1) for insert, deletion, access, and O(n) for searching...
console.log(characterCounter({}));
