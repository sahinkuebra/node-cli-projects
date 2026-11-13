// Usage: node caesarCipher.js "hello world" 3
// Positive shift = right, negative shift = left. Output is lowercase (case insensitive).

// process.argv[2] = phrase, process.argv[3] = shift number
const phrase = process.argv[2];
const shift = Number(process.argv[3]);

// Reject missing phrase or a shift that is not a whole number
if (phrase === undefined || !Number.isInteger(shift)) {
  console.log('Usage: node caesarCipher.js "<phrase>" <whole number>');
  process.exit(1);
}

// Case insensitive: work with lowercase only
const text = phrase.toLowerCase();

// Turn any shift (negative or bigger than 26) into a number from 0 to 25
const normalized = ((shift % 26) + 26) % 26;

function shiftChar(char) {
  const code = char.charCodeAt(0);
  // Only letters a-z (codes 97-122) are shifted; spaces and punctuation stay
  if (code < 97 || code > 122) return char;
  // Position in alphabet (0-25) + shift, wrap around with % 26, back to a letter
  return String.fromCharCode(((code - 97 + normalized) % 26) + 97);
}

console.log(text.split("").map(shiftChar).join(""));
