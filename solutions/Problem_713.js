// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

// For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".

const findShortestStandardizedPath = (string) => {
    const split = string.split('/')
    const standard = []

    for (let index = 0; index < split.length; index++) {
        const directory = split[index];
        if (directory === "..") {
            standard.pop()
        } else if (directory !== ".") {
            standard.push(directory)
        }
    }
    return standard.join("/")

}