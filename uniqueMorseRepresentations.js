/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseAlphabets = `.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..`;
    const morseArr = morseAlphabets.split(',');
    let morseMap = new Map(); 
    for(let i = 0; i<26; i++){
        morseMap.set(i+97,morseArr[i]);
    }
    
    // calculate morse code for each
    let morseWords = [];
    for(let i = 0;i<words.length;i++){
        const word = words[i];
        morseWords[i] ='';
        for(let j =0 ; j<word.length;j++){
            morseWords[i] = morseWords[i]+morseMap.get(word.charCodeAt(j));
        }
    }

    // check no. of distinct morseCodes
    let uniqueMap = new Map();
    let uniqueCount = 0;
    for(let i = 0;i<morseWords.length;i++){
        if(uniqueMap.has(morseWords[i])){
            uniqueMap.set(morseWords[i],uniqueMap.get(morseWords[i]+1));
        }
        else{
            uniqueMap.set(morseWords[i],1);
            uniqueCount++;
        }
    }
    return uniqueCount;
    
};
