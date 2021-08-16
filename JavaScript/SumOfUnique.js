/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    if (!nums.length) return 0;
    let uniqueMap = new Map();
    let sum = 0;
    nums.forEach(num => {
        if (!uniqueMap.has(num)) {
            uniqueMap.set(num, 1)
        }
        else uniqueMap.set(num, uniqueMap.get(num) + 1);
    })
    for (item of uniqueMap.keys()) {
        if (uniqueMap.get(item) == 1) sum += item;
    }
    return sum;
};
