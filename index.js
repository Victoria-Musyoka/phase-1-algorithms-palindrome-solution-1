function reverse(word){
  //'abc' => 'cba'
    const wordArray = word.split("")
    const reversedWordArray= wordArray.reverse()
    const reversedWord = reversedWordArray.join("")
    return reversedWord;
  }
  function isPalindrome(word) {
    // Write your algorithm here
    //reverse the input string
  const reversedWord = reverse(word);
  if (word === reversedWord){
    return true
  } else {
    return false
  }
  }
  
  
  /* 
    Add your pseudocode here
  */
  input: "racecar"
  output: true
  
  input: "robot"
  output: false
  /*
    Add written explanation of your solution here
  */
  // if the word matches with its reverse, then it is true. If not, it is false.
  
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
    console.log("");
  
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("ab"));
    console.log("");
    
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
    console.log("");
  

  
  
  
  
  }
  
  module.exports = isPalindrome;
  