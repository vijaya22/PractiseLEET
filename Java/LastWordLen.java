class LastWordLen {
    public int lengthOfLastWord(String s) {
        int p= s.length()-1;
        int length = 0;
        while(p >= 0){
            if(s.charAt(p) != ' '){
                length++;
            }
            else if(length>0){
                return length;
            }
            p--;
        }
        return length;
    }
}
