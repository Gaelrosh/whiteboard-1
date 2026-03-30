function sortNumbers(arr) {

    // Loop through the array starting from index 1
    for (let i = 1; i < arr.length; i++) {

        // Store the current number that needs to be placed correctly
        let current = arr[i];

        // Compare with the previous element
        let j = i - 1;

        // Move bigger numbers one step to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Put the current number in the correct position
        arr[j + 1] = current;
    }

    // Return the sorted array
    return arr;
}

// Export the function
module.exports = sortNumbers;

/*
Time Complexity:
O(n²)
- We compare numbers multiple times while sorting

Space Complexity:
O(1)
- No extra space is used, sorting is done in the same array
*/