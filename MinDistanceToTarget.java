class MinDistanceToTarget {
    public int getMinDistance(int[] nums, int target, int start) {
        double minimum  = Double.POSITIVE_INFINITY;
        for(int i =0 ;i<nums.length;i++){
            if(nums[i]==target){
                if(minimum> Math.abs(i-start)){
                    minimum = Math.abs(i-start);
                }
            }
        }
        return (int) minimum;
    }
}
