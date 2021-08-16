/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let count = 0;
    for(let i=0; i<rating.length; i++){
        let leftSmall = 0;
        let rightSmall = 0;
        let leftLarge = 0;
        let rightLarge = 0;
        
        for(let j=0; j<i; j++){
            if(rating[j]<rating[i]){
                leftSmall++;
            }
            else if(rating[j]>rating[i]){
                leftLarge++;
            }
        }
        
        for(let j=i+1; j<rating.length; j++){
            if(rating[j]<rating[i]){
                rightSmall++;
            }
            else if(rating[j]>rating[i]){
                rightLarge++;
            }
        }
        count += leftSmall*rightLarge + rightSmall*leftLarge;
    }
    return count;
    
};
