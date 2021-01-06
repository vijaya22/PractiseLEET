public class MajorityNumber{
    public int majorityElement(int[] numArray){
	    HashMap<Integer, Integer> countHashMap = new HashMap<>();
        int majorityCount = numArray.length/2 + 1;
	    for(int i : numArray){
		    if(countHashMap.containsKey(i)){
			    countHashMap.put(i, countHashMap.get(i)+1);
            }
            else{
	            countHashMap.put(i,1);
            }
            if(countHashMap.get(i) == majorityCount){
                return i;
            }
        }
    return -1;
    }   
}
