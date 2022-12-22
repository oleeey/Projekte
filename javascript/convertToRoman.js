function convertToRoman(num) {

    const roman = [[1,"I"],[4,"IV"],[5,"V"],[9,"IX"],[10,"X"],[40,"XL"],[50,"L"],[90,"XC"],[100,"C"],[400,"CD"],[500,"D"],[900,"CM"],[1000,"M"]];
  
    let output = "";
  
    while (num > 0) {
      for (let i = 0; i < roman.length; i++) {
        if (num == roman[i][0]) {
          output += roman[i][1];
          num -= roman[i][0];
        }
        else if (num > roman[i][0] && num < roman[i+1][0]) {
          output += roman[i][1];
          num -= roman[i][0];
        }
        else if (num == 1) {
          output += "I";
          num = 0;
        }
        else if (num / 1000 > 1) {
          output += "M";
          num -= 1000
        }
      }
    }
  
    return output;
  }
  
  console.log(convertToRoman(9999));