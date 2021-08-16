/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurantAgain = function(list1, list2) {
    let list1Map = new Map();
    list1.forEach((item,i)=>{
        list1Map.set(item,i);
    })
    let leastSum = Infinity;
    let result = [];
    list2.forEach((item,i)=>{
        if(list1Map.has(item) && list1Map.get(item)+i <= leastSum){
            if(list1Map.get(item)+i == leastSum){
                
                result.push(item);
            }
           else {
               leastSum = list1Map.get(item)+i;
               result = [item];
           }
        }
    })
    return result;
};
