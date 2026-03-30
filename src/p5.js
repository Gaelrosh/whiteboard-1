let list1 = [4, 5, 2, 3, 1, 6];
let list2 = [8, 7, 6, 9, 4, 5];


let result = [];

// Loop through each element in list1
for (let i = 0; i < list1.length; i++) {
    let found = false;

    // For each element in list1, check against list2
    for (let j = 0; j < list2.length; j++) {

        // If a matching element is found
        if (list1[i] === list2[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result.push(list1[i]);
    }
}

// Loop through each element in list2
for (let i = 0; i < list2.length; i++) {
    let found = false;

    // For each element in list2, check against list1
    for (let j = 0; j < list1.length; j++) {

        // If a matching element is found
        if (list2[i] === list1[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result.push(list2[i]);
    }
}

function sortNumbers(arr) {
  // Loop through the array
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];   // number we want to place correctly
    let j = i - 1;

    // Move elements that are bigger than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place current number in correct position
    arr[j + 1] = current;
  }

  return arr;
}

//Sort before showing result
console.log(sortNumbers(result));

/*
Time Complexity:
O(n × m + k²)
- Compare every item in list1 (n) with list2 (m)
- Compare every item in list2 (m) with list1 (n)
- Sort the result using insertion sort, which takes k²

Space Complexity:
O(n + m)
- Store the uncommon elements in result
*/