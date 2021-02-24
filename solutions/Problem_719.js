// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".


const colName = (n) => {
    if (n === 0) return null
    n -= 1

    let len = 26, s = "";
    while (n >= 0) {
        //NOTE: 97 is js charcode for A
        s = String.fromCharCode(n % len + 97) + s;
        n = Math.floor(n / len) - 1;
    }
    return s.toUpperCase();
}
console.log(colName(0))