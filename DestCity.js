const assert = require("assert");

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    if(!paths.length) return "";
    let sourcecities = new Set();
    for(let city of paths){
        sourcecities.add(city[0]);
    }

    let destinationCities = new Set();
    for(let city of paths){
        destinationCities.add(city[1]);
    }
   return Array.from(destinationCities).filter(destCity=> !sourcecities.has(destCity)).toString();
};

const x = destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]);
console.log('x:::',x)

// blank array
assert(destCity([]) == "");

// no city exists
assert(destCity([["A","B"],["B","C"],["C","A"]]) == "");

// good flow
assert(destCity([["A","Z"]]) == "Z");
