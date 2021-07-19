/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // using right to left pass
    
    let map = new Map();
    map.set('M', 1000);
    map.set('D', 500);
    map.set('C', 100);
    map.set('L', 50);
    map.set('X', 10);
    map.set('V', 5);
    map.set('I', 1);
    
    let lastSymbol = s[s.length-1];
    let lastValue = map.get(lastSymbol);
    let total = lastValue;
    
    for(let i = s.length-2; i>=0; i--){
        let currentSymbol = s.substring(i,i+1);
        let currentValue = map.get(currentSymbol);
        
        if(currentValue < lastValue){
            total -= currentValue;
        }
        else {
            total += currentValue;
        }
        lastValue = currentValue;
    }
    return total;
};
