const isPalindrome = require("./tdd.js");

test("abc", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});
test("aba", () => {
  const result = isPalindrome("aba");
  expect(result).toBe(true);
});
test("abba", () => {
  const result = isPalindrome("abba");
  expect(result).toBe(true);
});
test("no input ", () => {
  const result = isPalindrome();
  expect(result).toBeNull();
});
test("input as null ", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});
test("input as single letter ", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});
test("input as numbers ", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});
test("input as numbers ", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});
test("input as -ve numbers ", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});
test("input as boolean,{},[],()=>{} ", () => {
  const result = isPalindrome({});
  expect(result).toBe(null);
});
test("case sensitivity ", () => {
  const result = isPalindrome("Aba");
  expect(result).toBe(true);
});
test("ignore spaces ", () => {
  const result = isPalindrome("   aba    ");
  expect(result).toBe(true);
});
test("length should be 10 ", () => {
  const result = isPalindrome("abcdefghijklmnopqrstuvwxyz");
  expect(result).toBe(null);
});
