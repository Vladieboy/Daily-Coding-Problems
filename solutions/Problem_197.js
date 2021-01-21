// Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

// let k = 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const rotateArray = (array, k) => {
    let _arr = [...array]
    for (let index = 0; index < k; index++) {
        let lastEl = array.pop()
        _arr.unshift(lastEl)

    }
    return _arr
}