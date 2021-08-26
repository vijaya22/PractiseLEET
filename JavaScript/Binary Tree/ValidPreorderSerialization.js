/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // time complexity - O(n)
    // space complexity - O(1)
    let slots = 1;
    let n = preorder.length;
    for(let i=0; i<n; i++){
        if(preorder[i] == ','){
            slots--;
            if(slots < 0) return false;
            if(preorder[i-1] != '#') slots+=2;
        }
    }
    slots = (preorder[n-1] == '#') ? slots-1 : slots+1;
    return slots == 0;
};