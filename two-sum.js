// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// // Observations
// We can create a cache object and populate it as we walk the input array. 
// We can use the cache to check for the presence of the needed number in O(1) time and avoid expensive repeated searching.

const twoSum = (nums, target) => {
    const cache = new Map
    for(let x = 0; x < nums.length; x++) {
        const needed = target - nums[x]
        if(cache.has(needed)) {
            return [x, cache.get(needed)]
        }
        cache.set(nums[x], x)
    }
    return null
}
