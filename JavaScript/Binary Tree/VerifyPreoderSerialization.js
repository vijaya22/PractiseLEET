/*Algorithm

Initiate the number of available slots: slots = 1.

Split preorder traversal by comma, and iterate over the resulting array. At each step :

Both a number or a null node take one slot : slots = slot - 1.

If the number of available slots is negative, the preorder traversal is invalid, return False.

Non-empty node node != '#' creates two more available slots: slots = slots + 2.

Preorder traversal is valid if all available slots are used up : return slots == 0.
*/
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // time complexity - O(n)
    // space complexity -O(1)
    let availableSlots = 1;
    let tree = preorder.split(',');
    for(let node of tree){
        availableSlots--;
        if(availableSlots < 0) return false;
        if(node != '#')availableSlots+=2;
    }
    return availableSlots == 0;
};

const output = isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#");

console.log('output',output);