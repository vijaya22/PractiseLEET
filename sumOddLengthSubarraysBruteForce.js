/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;
    let res = 0;
    for(let i = 0;i<n;i++){
        for(let j =i;j<n;j++){
            let ar = arr.slice(i,j+1);
            
            if(ar.length % 2 != 0 ){
                console.log('ar:::',ar);
               res+= sum(ar);
            }
        }
    }
    return res;
};
function sum(at){
    return at.reduce((a,b)=>a+b);
}
