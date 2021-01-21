// Given n numbers, find the greatest common denominator between them.

// For example, given the numbers [42, 56, 14], return 14.

const gcd = (nums) => {
    let n = nums[0]
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        //current and previous in array
        n = _gcd(n, num)
    }
    return n
}

const _gcd = (a, b) => {
    
    while (b) {
        let t = b
        b = a % b
        a = t
    }
    return a;
}