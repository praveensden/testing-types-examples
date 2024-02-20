// Palindrome Check - if you read from front and back it will be the same.
/* 
isPalindromeCheck => 
 abc -> false
 aba -> true
 abba -> true 
 no input -> null
 single letter input -> always true 
 123 -> false
 121 -> true 
 -ve number  -121 -> true
 boolean,{},[],()=>{} -> false
 case sensitvity - ABa  -> true
 "     aba     " -> true
*/

const isPalindrome = (x) => {
  if (!x) return null;
  if (typeof x === "number") {
    x = Math.abs(x).toString();
  }
  if (typeof x !== "string") return null;
  if (x.length > 10) return null;
  if (x.length === 1) return true;
  x = x.toLowerCase().trim();
  const reverse = x.split("").reverse().join("");
  if (x === reverse) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
