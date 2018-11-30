function quickSort(args) {
    if (args.length < 2) return args;

    const pivot = Math.max(...args);
    const left = [];
    const right = [];

    for (let i = 1; i < args.length; i++) {
        if (args[i] < pivot) {
            left.push(args[i]);
        } else {
            right.push(args[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(
    quickSort([3, 4, 6, 1, 2, 7, 3, 4, 6, 1, 2, 7, 3, 5, 2, 8, 11, 0, 1])
);
