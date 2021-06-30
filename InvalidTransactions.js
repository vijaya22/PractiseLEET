/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let addedArr = new Array(transactions.length).fill(false);
    let result=[];
    for(let i=0; i<transactions.length; i++){
        const [name1,time1,amount1,city1] = transactions[i].split(',');
        if(amount1>1000 && !addedArr[i]){
            result.push(transactions[i]);
            addedArr[i]= true;
        }
        for(let j=i+1; j<transactions.length; j++){
            const [name2,time2,amount2,city2] = transactions[j].split(',');
            if(name1 === name2 && city1 != city2 && Math.abs(time1-time2) <=60){
                if(!addedArr[j]){
                    result.push(transactions[j]);
                    addedArr[j] = true;
                }
                if(!addedArr[i]){
                    result.push(transactions[i]);
                    addedArr[i] = true;
                }
            }
        }
    }
     return result;
};
