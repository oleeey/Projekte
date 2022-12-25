function checkCashRegister(price, cash, cid) {
    const changeList = [["PENNY", 0.01],["NICKEL",0.05],["DIME",0.1],["QUARTER",0.25],["DOLLAR",1],["FIVE",5],["TEN",10],["TWENTY",20],["ONE HUNDRED",100]];
  
    let change = cash - price;
    let output = {
      status: "",
      change: []
    };
  
    let cid2 = [...cid];
  
  
    while (change !== 0) {
      for (let i = 0; i < changeList.length; i++) {
        //console.log("change:",change);
        if (change >= changeList[i][1] && change <= changeList[i+1][1]) {
          if (cid2[i][1] >= changeList[i][1]) {
            let arr = [];
            arr.push(changeList[i][0]);
            arr.push(changeList[i][1]);
            output.change.push(arr);
            change -= changeList[i][1];
            change = Math.round(change*100)/100;
            cid2[i][1] -= changeList[i][1];
            break;
          }  
  
        }
    
            
      }
    
    }
    
   
      
      
    
  
  
  
    return output;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));