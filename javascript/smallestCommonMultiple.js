function smallestCommons(arr) {
    arr = arr.sort((a,b) => a - b);
    /*
    Kleinstes gemeinsames Vielfaches;
    geg. 2 Zahlen, KgV soll durch die beiden Zahlen und 
    allen Zahlen dazwischen dividierbar sein (also ohne Rest)
    */
    
    let range = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      range.push(i);
    }
    console.log(range);
  
    let found = false;
    let num = range[0];
  
    while (!found) {
     
      if (range.every(value => num % value === 0)) {
        found = true;
        return num;
      }
      num ++;
         
    }
    
  }
  
  console.log(smallestCommons([1, 13]));