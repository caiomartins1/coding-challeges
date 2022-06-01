// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longestSubstringLength = 0;
  const newString = [];

  for (let i = 0; i < s.length; i++) {
    const indexOfCurrentChar = newString.indexOf(s[i]);

    if (indexOfCurrentChar !== -1) {
      newString.splice(0, indexOfCurrentChar + 1);
    }
    newString.push(s[i]);

    longestSubstringLength = Math.max(longestSubstringLength, newString.length);
  }

  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring('dvdf'));
