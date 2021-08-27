/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2){
    let result = [];
    let leastIndexSum = Number.POSITIVE_INFINITY;
    if(!list1.length || !list2.length) return result;
    let map = new Map();
    for(let i=0; i<list1.length; i++){
        map.set(list1[i],i);
    }
    for(let i=0; i< list2.length; i++){
        if(map.has(list2[i])){
            if(map.get(list2[i]) + i < leastIndexSum){
                result = [];
                result.push(list2[i]);
                leastIndexSum = map.get(list2[i]) + i;
            }
            else if(leastIndexSum == (map.get(list2[i]) + i)){
                result.push(list2[i]);
            }
        }
    }
    return result;
}