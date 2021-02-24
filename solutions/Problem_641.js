// Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

// For example, for the input [1, 2, 3, 10], you should return 7.

const smallestSubsetInt = (nums) => {
    let sum = 1
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n <= sum) sum += n
        else break;
    }
    return sum
}

smallestSubsetInt([1, 2, 3, 10]) //7