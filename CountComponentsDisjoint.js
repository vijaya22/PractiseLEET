class DisjointSet{
    constructor(n){
        this.parents = new Array(n).fill(-1);
    }
    find(x){
        if(this.parents[x] ==-1){
            return x;
        }
        return this.find(this.parents[x]);
    }
    union(x,y){
        let xRoot = this.find(x);
        let yRoot = this.find(y);
        if(xRoot != yRoot){
            this.parents[yRoot] = xRoot;
        }
    }
    
    countAbsoluteParents(){
        let count = 0;
        for(let i=0;i<this.parents.length;i++){
            if(this.parents[i] == -1){
                count++;
            }
        }
        return count;
    }
    
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // time complexity - O(e. a(n))
    // complexity = O(n)
    let dsu = new DisjointSet(n);
    edges.forEach(edge=>{
        dsu.union(edge[0],edge[1]);
    })
    return dsu.countAbsoluteParents();
};
