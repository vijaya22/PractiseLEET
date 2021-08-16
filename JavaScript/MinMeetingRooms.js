/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    let rooms = [];
    let start = 0;
    let end = 1;
    let maxRooms = 0;
    intervals.sort((a,b)=>a[0]-b[0]);
    intervals.forEach(meeting=>{
        if(rooms.length>0 && meeting[start]>=rooms[0]){
            rooms.shift();
        }
        rooms.unshift(meeting[end]);
        rooms.sort((a,b)=>a-b);
        maxRooms = Math.max(maxRooms,rooms.length)
    })
    return maxRooms;
};
