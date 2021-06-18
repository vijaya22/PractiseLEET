/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let minMap = new Map();
    list1.map((rest,i)=> {
        list2.map((res,j)=>{
            if(rest == res){
                if(minMap.has(i+j)){
                    let list = minMap.get(i+j);
                    minMap.set(i+j,list.concat(res));
                }
                else{
                    minMap.set(i+j,[rest]);
                }
            }
        })
    })
    let minimum = Math.min(...minMap.keys());
    let result = [];
    for(let key of minMap.keys()){
        if(key == minimum){
            result = result.concat(minMap.get(key));
        }
    }
    return result;  
};
