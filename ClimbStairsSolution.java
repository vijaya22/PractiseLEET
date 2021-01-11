public class ClimbStairsSolution {
	public int climbStairs(int n){
		int[] ways = new int [50];
		ways[0]=1;ways[1] =1; ways[2]=2;
		for(int i=2;i<=n;i++){
			ways[i] = ways[i-1]+ways[i-2];
        }
		return ways[n];
    } 
}
