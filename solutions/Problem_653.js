// You are given given a list of rectangles represented by min and max x- and y-coordinates. 
//Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

// For example, given the following rectangles:

// {
//     "top_left": (1, 4),
//     "dimensions": (3, 3) # width, height
// },
// {
//     "top_left": (-1, 3),
//     "dimensions": (2, 1)
// },
// {
//     "top_left": (0, 5),
//     "dimensions": (4, 3)
// }
// return true as the first and third rectangle overlap each other.

/**
 * 1 - get all whole number points of rectangle
 * 2 - compare if any match
 */

const _rectArr = [
    {
        "top_left": (1, 4),
        "dimensions": (3, 3)
    },
    {
        "top_left": (-1, 3),
        "dimensions": (2, 1)
    },
    {
        "top_left": (0, 5),
        "dimensions": (4, 3)
    }
]

const comparePoints = (rectArr) => {
    for (let index = 0; index < rectArr.length; index++) {
        const rect = rectArr[index];
        for (let i2 = 1; i2 < rectArr.length; i2++) {
            const rect2 = rectArr[i2];
            if (isOverlapping(rect, rect2)) return true
        }
    }
}
const isOverlapping = (rect1, rect2) => {
    if (rect1["top_left"][0] >= rect2["top_left"][0] + rect2["dimensions"][0])
        return false

    if (rect1["top_left"][0] + rect2["dimensions"][0] <= rect2["top_left"][0])
        return false

    if (rect1["top_left"][1] <= rect2["top_left"][1] - rect2["dimensions"][1])
        return false

    if (rect1["top_left"][1] - rect2["dimensions"][1] >= rect2["top_left"][1])
        return false

    return true
}

