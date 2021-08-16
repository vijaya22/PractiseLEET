/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
   let filteredRests =  restaurants.filter(rest=>{ 
       if(veganFriendly == 0){
           return rest[3] <= maxPrice && rest[4] <= maxDistance
       }
       else{
        return rest[2] == veganFriendly && rest[3] <= maxPrice && rest[4] <= maxDistance; 
       }
   });
   filteredRests = filteredRests.sort((res1,res2)=>{
        if(res1[1] != res2[1]){
            return res2[1]-res1[1];
        }
        else{
            return res2[0]-res1[0]
        }
    }).map(rf=> rf[0]);
    
    return filteredRests;
};
