// Given the head of a singly linked list, swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

const swapNodes = (nodes) => {
    const swappedList = []

    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        if (index % 2 !== 0) {
            //odd index
            const prev = swappedList.splice(index - 1, 1, node)
            swappedList.push(...prev)
        } else {
            swappedList.push(node)
        }

    }
    return swappedList
}