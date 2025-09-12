/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  let arr1 = [];
  let arr2 = [];
  let arr = [];
  if (input === null) return [];
  if (input.filter(n => n != 0 ).length == 0 ) return [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      arr1.push(input[i]);
    } else if (input[i] < 0) {
      arr2.push(input[i]);
    }
  }
  arr.push(arr1.length);
  arr.push(arr2.reduce((sum, current) => sum + current, 0));
  return arr;
}
