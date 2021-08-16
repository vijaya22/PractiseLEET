/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    // remove all alphabets from string
    let a =  s.replace(/[a-z]+/g,'');
    // convert digit string to array
    let sArr = a.split('');
    // convert each digit to number
    sArr = sArr.map(d=>+d);
    // remove duplicate by addign them into a set
    let set = new Set(sArr)
    sArr = Array.from(set);
    // sorting if length> 1 to find second larget number
    if(sArr.length>1){
        sArr.sort((a,b)=>b-a);
        return sArr[1];
    }
    else return -1;
    
};
