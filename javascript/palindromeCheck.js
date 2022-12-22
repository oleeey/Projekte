function palindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
  
    str = str.replace(/[^a-zA-Z0-9]/g,"");
    reverse = reverse.replace(/[^a-zA-Z0-9]/g,"");
  
    
    if (reverse.toLowerCase() == str.toLowerCase()) {
      return true;
    }
    else {
      return false;
    }
  
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));