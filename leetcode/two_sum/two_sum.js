// https://leetcode.com/problems/two-sum/
import { strict as assert } from 'node:assert';

// O(n^2) Solution
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [];
}

// O(n) Solution
function twoSum2(nums, target) {
  const lookUp = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (lookUp[complement] !== undefined) {
      return [lookUp[complement], i];
    }

    lookUp[nums[i]] = i;
  }

  return [];
}

assert.deepEqual([0, 1], twoSum2([2, 7, 11, 15], 9));
assert.deepEqual([], twoSum2([2, 7, 11, 15], 12));

assert.deepEqual([0, 1], twoSum([2, 7, 11, 15], 9));
assert.deepEqual([], twoSum([2, 7, 11, 15], 12));
