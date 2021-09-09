/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  
    // time complexity - O(|E| log |E|/|V|)
    // space complexity  - O(|V|+|E|)
  
    let sourceDestMap = new Map();
    
    for(let ticket of tickets){
       
        if(sourceDestMap.has(ticket[0])){
            let dest = sourceDestMap.get(ticket[0]).concat(ticket[1]);
            dest.sort();
            sourceDestMap.set(ticket[0],dest);
        }
        else sourceDestMap.set(ticket[0], [ticket[1]]);
    }
    
    let iternary = [];
    dfs("JFK",sourceDestMap, iternary);
    return iternary;
    
};
function dfs(origin, map, res){
    if(map.has(origin)){
        let destList = map.get(origin);
        while(destList.length){
            let dest = destList.shift();
            dfs(dest, map, res);
        }
    }
    res.unshift(origin);
}
