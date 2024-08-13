function hasTargetSum(array, target) {
  const seenNumbers = {};
  
  for (const number of array) {
    const total = target - number;

    if (seenNumbers[total] !== undefined) {
      return true;
    } 

    seenNumbers[number] = true;
    }

  return false;

}

/* 
  O(n)
*/

/* 
  Create an object to store seen numbers
  if the total is in seenNumbers, return true
  otherwise, store the number in the object
  If no pair is found, return false

*/

/*
  A function designed to show if a pair of numbers in an array adds up to
  a target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
