/**
 * A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].
 *
 */

// let arr = ['a','b','c']
// let perm = [2, 1, 0]
const transformArray = (arr, perm) => {
    if (arr.length !== perm.length) return null
    let orig = [...arr]
    let newOrder = []

    for (let index = 0; index < perm.length; index++) {
        const el = perm[index];
        let sliced = orig[el]
        newOrder.push(sliced)

    }

    return newOrder;
}
