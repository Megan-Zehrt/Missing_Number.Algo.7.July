// 268. Missing Number



// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.









/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n = nums.length
    let map = new Map()

    for(let i = 0; i < nums.length; i++){

        if(map.has(nums[i])){
            let count = map.get(nums[i])
            map.set(nums[i], count +1)
        }else{
            map.set(nums[i], 1)
        }
    }

    for(let i = 0; i <= n; i++){

        if(map.has(i)){
            continue
        }else{
            return i
        }
    }
};