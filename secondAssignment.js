//Question 1 : Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let reversed = (word) =>{

    const { count } = require("console")
    
        return word === word.split("").reverse().join("");
    }
    console.log("Is Palindrome : " + reversed("madam"));
    console.log("Is Palindrome : " + reversed("motor"));


   // Question 2; Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
    //Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

    
    function countingVowels(str) {
        // Convert the string to lowercase for case-insensitive matching
        const lowercaseStr = str.toLowerCase();
        
        // Initialize the count of vowels to 0
        let vowelCount = 0;
        
        // Iterate over each character in the string
        for (let i = 0; i < lowercaseStr.length; i++) {
          // Check if the character is a vowel (excluding 'y')
          if (lowercaseStr[i] === 'a' || lowercaseStr[i] === 'e' || lowercaseStr[i] === 'i' || lowercaseStr[i] === 'o' || lowercaseStr[i] === 'u') {
            vowelCount++;
          }
        }
        
        // Return the total count of vowels
        return vowelCount;
      }

console.log(countingVowels("backend"));  
console.log(countingVowels("Techquest javascript"));    
console.log(countingVowels("i love programming"));    


//QUESTION 3 :Write a JavaScript function that accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function dataType(data) {
    return typeof data;
  }
  

  console.log(dataType(140));             
  console.log(dataType("world"));       
  console.log(dataType(true));          
  console.log(dataType([2,3,4]));            
  console.log(dataType({name:"age"}));             
  console.log(dataType(undefined));     
  console.log(dataType(function() {})); 


  //QUESTION 4 : Write a JavaScript function to get the number of occurrences of each letter in a specified string.

  function countLetters(str) {
    // Convert the string to lowercase for case-insensitive matching
    const lowercaseStr = str.toLowerCase();
    
    // Create an empty object to store the counts
    const letterCounts = {};
    
    // Iterate over each character in the string
    for (let i = 0; i < lowercaseStr.length; i++) {
      // Exclude non-alphabetic characters
      if (/[a-z]/.test(lowercaseStr[i])) {
        // If the character is already in the object, increment its count
        if (letterCounts[lowercaseStr[i]]) {
          letterCounts[lowercaseStr[i]]++;
        } else {
          // If the character is not in the object, add it with a count of 1
          letterCounts[lowercaseStr[i]] = 1;
        }
      }
    }
    // Return the object containing the letter counts
  return letterCounts;
}

console.log(countLetters("TechQuest Academy"));

console.log(countLetters(" i love JavaScript"));


console.log(countLetters("i want to be a backend engineer"));
