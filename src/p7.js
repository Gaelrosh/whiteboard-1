function sqrt(x) {
    let i = 0;

    while (i * i <= x) {
        if (i * i === x) {
            return i;
        }
        i++;
    }
}

console.log(sqrt(4));

/*
Time Complexity:
O(√x)
- The loop starts at i = 0 and increases by 1 each time
- It stops when i * i equals x
- The value of i only goes up to √x
- So the loop runs about √x times

Space Complexity:
O(1)
- Only one variable (i) is used
*/