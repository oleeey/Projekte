function steamrollArray(arr) {
    let arr2 = [];
    
    const getArrays = function(x) {
      if (Array.isArray(x)) {
        x.forEach(item => getArrays(item))
      }
      else {
        arr2.push(x);
      }
    }
  
    arr.forEach(item => getArrays(item));
  
  
  
    return arr2;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));