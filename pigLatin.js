// Usage: node pigLatin.js "Pig Latin is hard to speak"
// Rules:
//  1. Word starts with a vowel                 -> add "way"                   (Awesome -> Awesomeway)
//  2. Word starts with a consonant + a vowel   -> move 1st letter, add "ay"   (Happy -> appyhay)
//  3. Word starts with two consonants          -> move 2 letters, add "ay"    (Child -> Ildchay)

const vowels = "aeiou";

function translateWord(word) {
  // Work in lowercase so the vowel check is simple
  const lower = word.toLowerCase();
  let result;

  if (vowels.includes(lower[0])) {
    // Rule 1: starts with a vowel
    result = lower + "way";
  } else if (vowels.includes(lower[1])) {
    // Rule 2: consonant + vowel -> move the first letter to the end
    result = lower.slice(1) + lower[0] + "ay";
  } else {
    // Rule 3: two consonants -> move the first two letters to the end
    result = lower.slice(2) + lower.slice(0, 2) + "ay";
  }

  // If the original word started with a capital letter, capitalize the result
  if (word[0] === word[0].toUpperCase()) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  return result;
}

// Join all arguments so quotes are optional
const input = process.argv.slice(2).join(" ");

// Stop with a help text if nothing was typed
if (input.trim() === "") {
  console.log('Usage: node pigLatin.js "your text here"');
  process.exit(1);
}

// Split on spaces, translate every word, join the words again
const words = input.trim().split(/\s+/);
console.log(words.map(translateWord).join(" "));
