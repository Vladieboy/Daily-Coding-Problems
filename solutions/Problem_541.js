// Run-length encoding is a fast and simple method of encoding strings. 
//The basic idea is to represent repeated successive characters as a single count and character. 
//For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. 
//You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
//You can assume the string to be decoded is valid.

const decode = (text) => {
    return text.replace(/(\d+)([ \w])/g, (_, count, chr) => chr.repeat(count));
};
const encode = (text) => {
   return text.replace(/([ \w])\1+/g, (group, chr) => group.length + chr );
};

/**
 * [] = start/end of char set
 * \w = word
 * / = beginning/end expression
 * g = global
 * + = capture group
 * 1 = repeats 1 or mroe times
 */