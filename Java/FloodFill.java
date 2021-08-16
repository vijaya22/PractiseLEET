class FloodFill {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int color = image[sr][sc];
        if(color == newColor) return image;
        dfs(image,sr,sc,color,newColor);
        return image;
    }
    
    public void dfs(int [][]arr, int x,int y, int color,int newColor){
        if(x<0 || y<0 || x== arr.length || y == arr[0].length || arr[x][y] != color) return ;
        arr[x][y] = newColor;
        dfs(arr,x,y-1,color,newColor);
        dfs(arr,x,y+1,color,newColor);
        dfs(arr,x-1,y,color,newColor);
        dfs(arr,x+1,y,color,newColor);
    }
}
