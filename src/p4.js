let list1 = [4, 5, 2, 3, 1, 6];
let list2 = [8, 7, 6, 9, 4, 5];


let result = [];

// Loop through each element in list1
for (let i = 0; i < list1.length; i++) {

    // For each element in list1, check against list2
    for (let j = 0; j < list2.length; j++) {

        // If a matching element is found
        if (list1[i] === list2[j]) {

            // Add the matching element to result
            result.push(list1[i]);

            // Stop checking further for this element
            break;
        }
    }
}

console.log(result); 


/*
Time Complexity:
O(n × m)
- Compare every item in list1(n) with list2(m)

Space Complexity:
O(k)
- k = number of common elements stored in result
*/