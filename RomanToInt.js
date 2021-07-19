/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = new Map();
    romanMap.set('I',1);
    romanMap.set('V',5);
    romanMap.set('X',10);
    romanMap.set('L',50);
    romanMap.set('C',100);
    romanMap.set('D',500);
    romanMap.set('M',1000);
    romanMap.set('IV', 4);
    romanMap.set('IX', 9);
    romanMap.set('XL', 40);
    romanMap.set('XC', 90);
    romanMap.set('CD', 400);
    romanMap.set('CM', 900);
   
    let sum = 0;
    let i = 0;
    while(i < s.length){
        if(i<s.length-1){
            let doubleSymbol = s.substring(i,i+2);
            if(romanMap.has(doubleSymbol)){
                sum+= romanMap.get(doubleSymbol);
                i+=2;
                continue;
            }
        }
        let singleSymbol = s.substring(i,i+1);
        sum+= romanMap.get(singleSymbol);
        i++;
        
    }
    return sum;
};
