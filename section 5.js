// Section 5: Problem Solving //

// Que no.1 Write a function in any programming language that calculates the factorial of a given number.

function factorial(n) {
    // Base case=>If n is 0 or 1, return 1.
    if (n===0 || n ===1) {
      return 1;
    }
  // Recursion case=> Multiply n by the factorial of (n-1).
    return n*factorial(n - 1);
  }

  //example:
  const num = 5; 
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);


//Que no.2 Solve the following algorithmic problem:
// You are given an array of integers. Find the two numbers in the array that add up to a specific target
// sum. Return their indices as an array. If there are multiple solutions, return any valid one.

function twoSum(nums,target) {
    const numIndices = {};
   // We iterating for loop through the input array nums
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      // Check if the complement exists in the numIndices object.
      if (complement in numIndices) {
        // If it does, return the indices of the two numbers.
        return [numIndices[complement], i];
      }
   // Store the current number and its index in the numIndices object.
      numIndices[nums[i]] = i;
    }
  // If solution is not found, return an empty array 
    return [];
  }
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const res = twoSum(nums, target);
  console.log(res); //  output =>[0, 1]
