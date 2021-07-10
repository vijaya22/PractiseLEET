/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    res[0] = 0;
    for(let i=1;i<=n;i++){
        res[i] = getBinaryRep(i)
    }
    return res;
};
function getBinaryRep(num){
    let count = 0;
    for(let i = num; i>=1;i=Math.floor(i/2)){
       // console.log('i:::',i);
       // console.log('i:::',i)
        if(i%2 != 0){
            count++;
        }
    }
    //console.log('count:::',count);
    return count;
}
