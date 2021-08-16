/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
 
    // sort the point array according to distance from origin
    // return first k elements
    // 
    // time complexity - O(nlogn)
    // space comeplxity -o(1)
    points.sort((p1,p2)=> getDistancefromOrigin(p1[0],p1[1])-getDistancefromOrigin(p2[0],p2[1]));
    return points.slice(0,k);
    
};
function getDistancefromOrigin(x,y){
    return Math.sqrt(x*x + y*y)
}
