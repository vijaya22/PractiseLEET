class RobotReturn {
    public boolean judgeCircle(String moves) {

        int upDownCount = 0;
        int leftRightCount = 0;
  
        char[] moveArr = moves.toCharArray();
        int len = moveArr.length;
        
        for(int i = 0; i<len; i++){
            if(moveArr[i] == 'U'){
                upDownCount ++;
            }
            else if(moveArr[i] == 'D'){
                upDownCount --;
            }
            else if(moveArr[i] == 'R'){
                leftRightCount ++;
            }
            else if(moveArr[i] == 'L'){
                leftRightCount --;
            }
        }
       
        if(upDownCount == 0 && leftRightCount == 0) return true;
        else return false;
    }
}
