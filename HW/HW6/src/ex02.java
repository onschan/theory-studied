import java.util.Scanner;

class Dictionary {
 private static String[] kor = { "사랑", "아기", "돈", "미래", "희망" };
 private static String[] eng = { "love", "baby", "money", "future", "hope" };
 
 public static String kor2Eng(String word) {
	    String tmp = word + "는 발견할 수 없습니다.";
	    for(int i = 0; i < kor.length; i++) {
	       if(word.equals(kor[i])) {
	          return word + "은 " + eng[i];
	       }
	    }
	    return tmp;
 }
 
 public void search()
 {
	 Scanner sc = new Scanner(System.in);

	 System.out.print("한글 단어?");
	 String word = sc.nextLine();
	 if(word.equals("그만"))
		 System.exit(0);
	 System.out.println(kor2Eng(word));
 }
}

public class ex02 {

	public static void main(String[] args) {
		System.out.println("한영 단어 검색 프로그램입니다.");
		while(true) {
		Dictionary dt = new Dictionary();
			dt.search();
		}
	}

}
