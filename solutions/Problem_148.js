
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Apple.

// Gray code is a binary code where each successive value differ in only one bit,
// as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

// Given a number of bits n, generate a possible gray code for it.

// For example, for n = 2, one gray code would be [00, 01, 11, 10].


let greyCode = []

const generateGray = (n) => {

    if (n <= 0) return null;
    let _grayCode = []


    _grayCode.push('0', '1')

    let i, j;
    for (i = 2; i < (1 << n); i = i << 1) {

        for (j = i - 1; j >= 0; j--)
            _grayCode.push(_grayCode[j]);

        // append 0 to the first half
        for (j = 0; j < i; j++)
            _grayCode[j] = "0" + _grayCode[j];

        // append 1 to the second half
        for (j = i; j < 2 * i; j++)
            _grayCode[j] = "1" + _grayCode[j];
    }

    return _grayCode
}




