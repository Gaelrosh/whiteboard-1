function maxOccurrenceChar(str) {  
    // Store character counts
    const map = new Map();  
    
    // Loop through each character
    for (let char of str) {  
        
        // Skip spaces and punctuation
        if (char.trim() === "" || !/\p{L}|\p{N}/u.test(char)) continue;  
        
        // Increase count
        map.set(char, (map.get(char) || 0) + 1);  
    }  
    
    // Track max character and count
    let maxChar = null;  
    let maxCount = 0;  
    
    // Find character with highest count
    for (let [char, count] of map) {  
        if (count > maxCount) {  
            maxChar = char;  
            maxCount = count;  
        }  
    }  
    
    // Return result
    return { character: maxChar, occurrence: maxCount };  
}

console.log(maxOccurrenceChar("Hello, world"));