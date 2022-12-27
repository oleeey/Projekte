function checkCashRegister(price, cash, cid) {
  const changeList = [["PENNY", 0.01],["NICKEL",0.05],["DIME",0.1],["QUARTER",0.25],["ONE",1],["FIVE",5],["TEN",10],["TWENTY",20],["ONE HUNDRED",100]];

  let change = cash - price;
  let output = {
    status: "",
    change: []
  };

  let cid2 = [...cid];
  let arr = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED", 0]];

  while (change !== 0) {
    for (let i = 0; i < changeList.length; i++) {
      //console.log("change:",change);
      if (change >= changeList[i][1] && change < changeList[i+1][1]) {
        if (cid2[i][1] >= changeList[i][1]) {
          arr[i][1] += changeList[i][1];
          change -= changeList[i][1];
          change = Math.round(change*100)/100;
          cid2[i][1] -= changeList[i][1];
          cid2[i][1] = Math.round(cid2[i][1]*100)/100;
          break;
        }
        else {
          let x = change.valueOf();
          for (let j = i; j >= 0; j--) {
            //console.log(cid2[j][1],changeList[j][1]);
            if (cid2[j][1] >= changeList[j][1]) {
              arr[j][1] += changeList[j][1];
              change -= changeList[j][1];
              change = Math.round(change*100)/100;
              cid2[j][1] -= changeList[j][1];
              break;
            }
          }
          if (x == change) {
            output.status = "INSUFFICIENT_FUNDS";
            return output;
          }      
        }
      }        
    }   
  }

  output.change = arr;
  output.change.sort((a,b) => b[1] - a[1]);
  output.change.forEach(num => num[1] = Math.round(num[1]*100)/100)

  if (cid2.every(item => item[1] == 0)) {
    output.status = "CLOSED";
  }
  else {
    output.change = arr.filter(item => item[1] > 0);
    output.status = "OPEN";
  }

  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));