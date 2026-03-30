function fib(n) {
    // If n is 0 or 1, return it directly (start of Fibonacci sequence: 0, 1)
    if (n <= 1) {
        return n;
    }

    // Otherwise, compute fib(n) by adding the two previous Fibonacci values
    return fib(n - 1) + fib(n - 2);
}

function fibonacciSequence() {
    let output = "";

    // Generate the first 10 Fibonacci numbers (from index 0 to 9)
    for (let i = 0; i < 10; i++) {
        // Get the ith Fibonacci number using recursion
        output += fib(i);

        // Add a comma separator after each number except the last one
        if (i < 9) {
            output += ", ";
        }
    }

    // Print the full Fibonacci sequence
    console.log(output);
}

fibonacciSequence();

/* 
Bonus: How would you handle preventing a stack overflow exception when generating a large sequence?

Recursive Fibonacci can cause a stack overflow because it creates many nested function calls. 
To prevent this, I would use an iterative approach with a loop, which does not use the call stack and is more efficient for large sequences. 
*/