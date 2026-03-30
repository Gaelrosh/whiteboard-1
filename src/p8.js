function isAnagram(str1, str2) {
  // Helper function to clean string
  function cleanString(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ""); // remove spaces & punctuation
  }

  str1 = cleanString(str1);
  str2 = cleanString(str2);

  // If lengths differ then not anagram
  if (str1.length !== str2.length) return false;

  const charCount = {};

  // Count characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare with str2
  for (let char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("restful", "fluster")); // The example shows false, but based on the strings this should be true.
console.log(isAnagram("hello", "world"));

/*
Time Complexity:
O(n)
- Both strings are cleaned
- The first string is looped once
- The second string is looped once
- Total operations grow linearly with input size

Space Complexity:
O(n)
- An object is used to store character counts
- In the worst case, many unique characters are stored
*/