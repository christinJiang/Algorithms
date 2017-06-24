import java.util.HashMap;
import java.util.Map;

public class lengthOfLongestSubstring {

	public int longestSubString(String s) {
		if (s.length() == 0)
			return 0;
		Map<Character, Integer> map = new HashMap<Character, Integer>();
		int max = 0;
		String subStr = null;
		for (int i = 0, j = 0; i < s.length(); ++i) {
			if (map.containsKey(s.charAt(i))) {
				j = Math.max(j, map.get(s.charAt(i)) + 1);
			}
			map.put(s.charAt(i), i);

			int length = i - j + 1;
			if (length > max) {
				subStr=s.substring(j, i+1);	
				max = length;
			}			
		}
		System.out.println("max size " + max);
		System.out.println("sub string " + subStr);
		
		return max;
	}

	public static void main(String[] args) {
		lengthOfLongestSubstring longest = new lengthOfLongestSubstring();
		longest.longestSubString("abcaeabfg");

	}

}
