/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

//Construct a deep copy of the list

    if(head == null) return null;
    
    let oldNode = head;
    let newNode = new Node(oldNode.val);
    let visited = new Map();
    visited.set(oldNode, newNode);
    
    while(oldNode != null){
        newNode.random = getClonedNode(visited,oldNode.random);
        newNode.next = getClonedNode(visited,oldNode.next);
        
        oldNode = oldNode.next;
        newNode = newNode.next;
    }
    return visited.get(head);
    
    
};
function getClonedNode(visited, node){
    if(node != null){
        if(visited.has(node)){
            return visited.get(node);
        }
        else{
            visited.set(node, new Node(node.val, null, null));
            return visited.get(node);
        }
    }
    return null;
}
