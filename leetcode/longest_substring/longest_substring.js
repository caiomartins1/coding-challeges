// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longestSubstringLength = 0;
  let counter = 0;
  let visitedCharacters = {};

  s.split('').forEach((char) => {
    if (!(char in visitedCharacters)) {
      visitedCharacters[char] = char;
      counter++;
    } else {
      visitedCharacters = {};
      if (counter > longestSubstringLength) {
        longestSubstringLength = counter;
      }
      counter = 0;
    }
  });

  return longestSubstringLength;
};
