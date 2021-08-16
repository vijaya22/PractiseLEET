class NumArray {

  int [] numArr;
	int [] sumArr;
	public NumArray(int [] nums ){
		numArr = nums;
		int n = nums.length;
    if(n == 0 ) return;
    sumArr = new int[n];
		sumArr[0] = nums[0]; 
		for(int i = 1;i < n ;i++){
			 sumArr[i] = sumArr[i-1] + nums[i];
    }
  }
	public int sumRange(int start, int end){
		if(start == 0){
			return sumArr[end];
    }
		return sumArr[end] -  sumArr[start-1];
  }
}
