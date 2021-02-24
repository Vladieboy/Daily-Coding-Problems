// Given a string, return the first recurring character in it, or null if there is no recurring character.

// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

const findRecurring = (string) => {

    const splitString = string.split("")
    const repeatedChar = []
    for (let index = 0; index < splitString.length; index++) {
        const element = splitString[index];

        if (repeatedChar.includes(element)) {
            return element
        } else {
            repeatedChar.push(element)
        }
    }
    return null

}