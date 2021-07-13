/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let  result = [intervals[0]];
    
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]<=result[result.length-1][1]){   
            const x =  result.pop();
            result.push([Math.min(x[0],intervals[i][0]),Math.max(x[1],intervals[i][1])])
        }
        else result.push(intervals[i])
    }
    
    return result;
};
