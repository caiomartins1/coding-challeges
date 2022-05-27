// https://leetcode.com/problems/add-two-numbers/
import { strict as assert } from 'node:assert';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
  const val1 = reverseNumberStr(getStringValueFromList(l1, ''));
  const val2 = reverseNumberStr(getStringValueFromList(l2, ''));

  const res = reverseNumberStr(`${BigInt(val1) + BigInt(val2)}`);

  return addToList(res);
};

const reverseNumberStr = (numberStr) => {
  let result = '';

  for (let i = numberStr.length - 1; i >= 0; i--) {
    result += numberStr[i];
  }

  return result;
};

const getStringValueFromList = (list, acc) => {
  if (list === null) return acc;
  return getStringValueFromList(list.next, acc + list.val);
};

const addToList = (result) => {
  const digits = result.split('');
  const nodesList = [];

  for (let i = 0; i < digits.length; i++) {
    nodesList.push(new ListNode(parseInt(digits[i], null)));
  }

  for (let i = 0; i < nodesList.length; i++) {
    if (i < nodesList.length - 1) {
      nodesList[i].next = nodesList[i + 1];
    } else {
      nodesList[i].next = null;
    }
  }

  return nodesList[0];
};

const expected = new ListNode(1, new ListNode(5, new ListNode(1, null)));
assert.deepEqual(
  expected,
  addTwoNumbers(
    new ListNode(0, new ListNode(0, new ListNode(1, null))),
    new ListNode(1, new ListNode(5, new ListNode(0, null)))
  )
);
