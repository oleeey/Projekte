function sumPrimes(num) {
    const sieve = [];
  
    function getSieve(factor) {
      for (let i = factor; i <= num; i += factor) {
        if (i !== factor) {
          sieve.push(i);
        }
      }
    }
  
  
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      getSieve(i);
    }
  
  
    let sum = 0;
    if (num >= 2) {
      for (let i = 2; i <= num; i++) {
        if (!sieve.includes(i)) {
          //console.log(i);
          sum += i;
        }
      }
  
    }
  
  
  
    return sum;
  }
  
  console.log(sumPrimes(977));