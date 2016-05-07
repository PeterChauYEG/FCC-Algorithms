// Exact Change
// https://www.freecodecamp.com/challenges/exact-change

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global Object

// Start Code
// function checkCashRegister(price, cash, cid) {
//   var change;
//   // Here is your change, ma'am.
//   return change;
// }

// // Example cash-in-drawer array:
// // [["PENNY", 1.01],
// // ["NICKEL", 2.05],
// // ["DIME", 3.10],
// // ["QUARTER", 4.25],
// // ["ONE", 90.00],
// // ["FIVE", 55.00],
// // ["TEN", 20.00],
// // ["TWENTY", 60.00],
// // ["ONE HUNDRED", 100.00]]

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

function checkCashRegister(price, cash, cid) {
    var demonination = [['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.10], ['QUARTER', 0.25], ['ONE', 1.00], ['FIVE', 5.00], ['TEN', 10.00], ['TWENTY', 20.00], ['ONE HUNDRED', 100.00]];
    
    // how much change do we need?
    var changedue = (Number(cash.toFixed(2)) - Number(price.toFixed(2))).toFixed(2);
    
    // how much money is in cid?
    var cidTotal = (function(cid) {
        var total = 0;
        
        for (var coinAndBills in cid){
            total += +cid[coinAndBills][1];
        }
        
        return total.toFixed(2);
    })(cid);
    
    // what if there isn't enough cid to make change?
    // "Insufficient Funds"
    if (cidTotal > changedue) {
        console.log(`cidTotal: ${cidTotal}, changedue: ${changedue}`);
        return "Insufficient Funds";
    }
    
    // is cid = to change due?
    // "Closed"
    if (cidTotal == changedue) {
        return "Closed";
    }

    // make change
    // sort highest to lowest order
    // console.log(demonination[0][1]); = 0.01;
    var change = demonination.reverse().map((key) => {

        // check the factorial
        var amount = (changedue / key[1]).toFixed(2);
        var formatedAmount = Math.floor(changedue / key[1]);
        
        // check if demonination should be used
        if (amount < 1) {
            console.log(`not: ${key[0]}, amount: ${amount}`);
            return;
        }
        
        var maxOfDenomination = (formatedAmount * key[1]);
        var demoninationCID = key[1];
        var value = formatedAmount * key[1];
        
        // console.log(key[0], changedue.toFixed(2));
        console.log(`use: ${key[0]}, amount: ${formatedAmount}, value: ${value}, maxOfDenomination: ${maxOfDenomination}, demoninationCID: ${demoninationCID}`);

        // check if there's enough of this demonmination in CID
        
        
        
        
        // return in formate ['DEMOMINATION', VALUE]
        return [key[0], value];
        
    });
    
    return change.filter((val) => {
        return val !== undefined;
    });
}

// console.log(checkCashRegister(19.50, 20.91, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 21.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));