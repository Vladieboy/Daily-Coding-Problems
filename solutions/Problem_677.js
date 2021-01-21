// The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. 
//The method is to take increasingly larger prime numbers, and mark their multiples as composite.

// For example, to find all primes less than 100, 
//we would first mark [4, 6, 8, ...] (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on. 
//Once we have done this for all primes less than N, the unmarked numbers that remain will be prime.


const getPrimes = (max) => {
    let primes = [], sieve = [], i, j

    for (i = 2; i <= max; ++i) {
        //loop thru all
        //initially empty so false
        if (!sieve[i]) {
            //add number
            primes.push(i);
            
            for (j = (i * 2); j <= max; j += i) {
                sieve[j] = true
            }
        }
    }
    return (primes)
}

return primes;
// Implement this algorithm.

// Bonus: Create a generator that produces primes indefinitely (that is, without taking N as an input).