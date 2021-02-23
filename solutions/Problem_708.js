// A fixed point in an array is an element whose value is equal to its index. 
//Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

//For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

const isFixedArray = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === index) return element
        
    }
    return false
}


isFixedArray([-6, 0, 2, 40])
isFixedArray([1, 5, 7, 8])