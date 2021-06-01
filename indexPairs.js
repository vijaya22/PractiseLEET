/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
   let outputPairs = [];
    words.forEach(word=>{
        let start = 0;
        while(text.indexOf(word,start) != -1){
            console.log('start:::',start,word);
           // if(text.indexOf(word,start) != -1){
               outputPairs.push([text.indexOf(word,start),text.indexOf(word,start)+word.length-1]); 
           // }
            start = text.indexOf(word,start)+1;
        }
    })
   
    outputPairs = sortedPairs(outputPairs);
    return outputPairs;
};
/**
* @param {number[][]} pairs
* return {number[][]}
*/
var sortedPairs = function(pairs){
    let sortedPairs = [];
    sortedPairs = pairs.sort((a, b) =>  {
         if(a[0]-b[0]>0)
               return 1;
            else if(a[0]-b[0]<0)
                return -1;
            else {
                return a[1]-b[1];
            } 
    })
    return sortedPairs;
}
