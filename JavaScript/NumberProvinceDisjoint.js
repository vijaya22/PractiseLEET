class DisjointSet{
    constructor(len){
        this.parents = new Array(len).fill(-1);
    }
    find(x){
        if(this.parents[x] == -1){
            return x;
        }
        return this.find(this.parents[x]);
        
    }
    union(x, y){
        let xRoot = this.find(x);
        let yRoot = this.find(y);
        if(xRoot != yRoot){
            this.parents[yRoot] = xRoot;
        }
    }
    
    absoluteParentCount(){
        let count =0;
        for(let i=0; i<this.parents.length; i++){
            if(this.parents[i] < 0){
                count++;
            }
        }
        return count;
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // O(n3) - time complexity
    // O(n) - space (for parent array)
        let dsu = new DisjointSet(isConnected.length);
        for(let i = 0; i<isConnected.length; i++){
            for(let j=0; j<isConnected.length; j++){
                if(isConnected[i][j] == 1 && i != j){
                    dsu.union(i,j);
                }
            }
        }
        let count  = dsu.absoluteParentCount();
        return count;
    
};
