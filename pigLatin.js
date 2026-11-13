// Usage: node pigLatin.js "Pig Latin is hard to speak"
// Rules:
//  - Word starts with a vowel      -> add "way"                       (awesome -> awesomeway)
//  - Word starts with consonant(s) -> move them to the end, add "ay"  (child -> ildchay)
//  - "qu" moves together           (quiet -> ietquay)

const vowels = "aeiou";

function translateWord(word) {
  // Split off trailing punctuation so "hello!" -> "ellohay!"
  const match = word.match(/^([A-Za-z]+)([^A-Za-z]*)$/);
  if (!match) return word; // numbers/symbols stay unchanged
  const letters = match[1];
  const punctuation = match[2];

  const lower = letters.toLowerCase();
  let result;

  if (vowels.includes(lower[0])) {
    result = lower + "way";
  } else {
    // Find the index of the first vowel ('y' counts as a vowel after position 0)
    let i = 0;
    while (
      i < lower.length &&
      !vowels.includes(lower[i]) &&
      !(lower[i] === "y" && i > 0)
    ) {
      i++;
    }
    // Keep "qu" together
    if (lower[i - 1] === "q" && lower[i] === "u") i++;
    // Move the leading consonants to the end and add "ay"
    result = lower.slice(i) + lower.slice(0, i) + "ay";
  }

  // Restore capital first letter if the original had one
  if (letters[0] === letters[0].toUpperCase()) {
    result = result[0].toUpperCase() + result.slice(1);
  }
  return result + punctuation;
}

// Join all arguments so quotes are optional
const input = process.argv.slice(2).join(" ");
if (!input) {
  console.log('Usage: node pigLatin.js "your text here"');
  process.exit(1);
}

console.log(input.split(" ").map(translateWord).join(" "));
