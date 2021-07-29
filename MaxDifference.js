/** 
* @param {Number[]} px
* @return Number
*/
function maxDifference(px){
  let min = px[0];
  let diff = -1;
  
  for(let i=1;i<px.length;i++){
    if(px[i] > min){
      diff = Math.max(px[i]-min, diff);
    }
    min = Math.min(px[i], min);
  }
  return diff;
}
