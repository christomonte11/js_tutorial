let Phrase = require("mhartl-palindrome");

// Prompt user for some input.
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

// Return the result.
if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`);
}

