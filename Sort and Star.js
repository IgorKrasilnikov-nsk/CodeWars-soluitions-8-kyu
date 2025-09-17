/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  let arr = s.sort();
  
  let arr1 =[];
  arr1.push(arr[0]);
  
  let arr2 =[];
  arr2 = arr[0].split('');
  
  let str = arr2.join("***");
  
  return str;
}
