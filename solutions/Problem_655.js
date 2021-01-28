// Given a 32-bit integer, return the number with its bits reversed.

// For example, given the binary number 
//1111 0000 1111 0000 1111 0000 1111 0000, 
//return 0000 1111 0000 1111 0000 1111 0000 1111.
let bits = "11110000111100001111000011110000"

const binaryReverse = (binary) => {
    let _split = binary.split("");
        
    let reversedBits = []
    for (let index = 0; index < _split.length; index++) {
        let element = _split[index];
        element == "0" ? element = "1" : element = "0"
        reversedBits.push(element)
    }
    
    return reversedBits.join('')
}

const rev = binaryReverse(bits)
