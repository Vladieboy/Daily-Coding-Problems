// Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

// For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.

const isPalindrome = (linkedList) => {

    for (let incrementingIndex = 0, descreasingIndex = linkedList.length - 1;
        incrementingIndex !== descreasingIndex;
        incrementingIndex++, descreasingIndex--) {

        let first = linkedList[incrementingIndex], last = linkedList[descreasingIndex]

        if (first !== last) return false
    }



    return true
}

isPalindrome([1, 2, 3, 2, 1])
isPalindrome([1, 4])