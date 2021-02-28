class FirstUniqueChar {
    public int firstUniqChar(String s) {
        int length = s.length();
        LinkedHashMap<Character, Integer> countMap = new LinkedHashMap();
        char result = '1'; 
        char[] chars = s.toCharArray();
        for(int i=0;i<chars.length; i++){
            if(countMap.containsKey(chars[i])){
                int count = countMap.get(chars[i])+1;
                countMap.replace(chars[i],count);
            }
            else{
                countMap.put(chars[i],1);
            }
        }
        
        for(Map.Entry<Character,Integer> entry : countMap.entrySet()){
            if(entry.getValue() == 1) {
                result = entry.getKey();
                break;
            }
        }
        if(result != '1'){
            return s.indexOf(result);
        }
        else { return -1;}
    }
}
