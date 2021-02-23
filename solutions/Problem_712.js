// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.





const balance = (s) => {
    let _split = s.split("")

    let stack = []
    for (let i = 0; i < s.length; i++) {
        let el = _split[i]
        if (el === "(" || el === "[" || el === "{") {
            //if opening bracket, add
            stack.push(el)
        } else {
            if (stack.length === 0) return false
            //if empty array and not opening, close
            if ((el === ")" && stack[stack.length - 1] !== "(") ||
                (el === "]" && stack[stack.length - 1] !== "[") ||
                (el === "}" && stack[stack.length - 1] !== "{")
            ) {
                //if closing and first el in array not corresponding opening, close
                return false
            }
            //remove last el
            stack.pop()

        }
    }
    //return length
    return stack.length > 0 ? false : true


}