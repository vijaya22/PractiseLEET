/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ruleMap = new Map();
    ruleMap.set('type',0);
    ruleMap.set('color',1);
    ruleMap.set('name',2);
    const checkIndex = ruleMap.get(ruleKey);
    let count = 0;
    items.forEach(item=>{
        if(item[checkIndex] == ruleValue){
            count++;
        }
    })
    return count;
};
