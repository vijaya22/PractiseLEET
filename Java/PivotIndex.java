class Solution {
    public int pivotIndex(int[] nums) {
        int pivotIndex = -1;
        int[] sumArr = new int[nums.length+1];
        sumArr[0] = 0;
        for(int i=0; i< nums.length; i++){
            sumArr[i+1] = sumArr[i]+ nums[i]; 
        }
        sumArr[nums.length] = sumArr[nums.length-1] + nums[nums.length-1];
        int rightIndex = sumArr.length-1;
        for(int i = 0;i<sumArr.length-1;i++){
            if(sumArr[i] == (sumArr[rightIndex]-sumArr[i+1])){
               return i;
            }
        }
        return pivotIndex;
    }
}
