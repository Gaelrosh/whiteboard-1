function fizzBuzz(){
    // Show output as a single line string
    let output = "";

    // Loop through numbers from 1 to 100
    for (let i = 1; i <= 100; i++){

        if (i % 3 === 0 && i % 5 === 0){
            output += "FizzBuzz";
        }
        else if (i % 3 === 0){
            output += "Fizz";
        } 
        else if (i % 5 === 0){
            output += "Buzz";
        }
        else{
            output += i;
        }

        // Add comma separator except after the last element
        if (i < 100){
            output += ", ";
        }
    } 

    console.log(output);
}

fizzBuzz();
