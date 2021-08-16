class SingleNumberHashMapSol {
    public int singleNumber(int[] nums) {
        HashMap<Integer,Integer> numsCount = new HashMap<>();
        for(int i: nums) {
            numsCount.put(i, numsCount.getOrDefault(i,0)+1);
        }
        for(int i: nums){
            if(numsCount.get(i) == 1){
                return i;
            }
        }
       return 0;
    }
}
