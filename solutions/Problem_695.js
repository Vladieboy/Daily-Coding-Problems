// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).


const getRandNotInList3 = (n, list) => {
    if (list.length >= n) throw "n must be greater than list length";
    let rand;
    do { rand = Math.floor(Math.random() * n); }
    while(list.includes(rand));
    return rand;
  };
  
  let rand = getRandNotInList3(12, [2,3,4,5])




