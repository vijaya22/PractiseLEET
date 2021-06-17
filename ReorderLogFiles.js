/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letterLogs =[];
    let digitLogs = [];
    logs.forEach(log=>{
        const res = log.substring(log.indexOf(' ')+1);
        if(/\d+/.test(res)){
            digitLogs.push(log);
        }
        else{
            letterLogs.push(log);
        }
    })
    letterLogs.sort((a,b)=>{
        const res1 = [a.substring(0,a.indexOf(' ')),a.substring(a.indexOf(' ')+1)];
        const res2 = [b.substring(0,b.indexOf(' ')),b.substring(b.indexOf(' ')+1)];
        if(res1[1] != res2[1]){
            return res1[1].localeCompare(res2[1]);
        }
        else{
            return res1[0].localeCompare(res2[0],'en',{numeric:true});
        }
    })
    return letterLogs.concat(digitLogs);
};
