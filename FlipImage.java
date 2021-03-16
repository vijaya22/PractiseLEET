class FlipImage {
    public int[][] flipAndInvertImage(int[][] image) {
        flip(image);
        invert(image);
        return image;
    }
    public int[][] flip(int[][] image){
        int n = image.length;
        for(int i=0; i<n; i++){
            for(int j=0; j<n/2; j++){
                int temp = image[i][j];
                image[i][j] = image[i][n-j-1];
                image[i][n-j-1] = temp;
            }
        }
        return image;
    }
    public int[][] invert(int[][] image){
        int n = image.length;
        for(int i= 0; i<n;i++){
            for(int j=0;j<n;j++){
                if(image[i][j]==1){
                    image[i][j] = 0;
                }
                else{
                    image[i][j] = 1;
                }
            }
        }
        return image;
    }
}
