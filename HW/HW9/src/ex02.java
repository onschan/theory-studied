import java.util.Random;

public class ex02 {
	
	public static void main(String[] args) {
		Random rand = new Random();
		
		int[] arr = new int[10];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = 0;
		}
		
		for(int i = 0; i < 100; i++) {
			int r = rand.nextInt(10);
			System.out.print(r);
			
			for(int j = 0; j < 10; j++) {
				if(r == j) {
					arr[j]++;
				}
		    }
		    
		}
		System.out.println();
		System.out.println();
		
		for(int i = 0; i < 10; i++) {
			System.out.print(i+"°³¼ö:");
			for(int j = 0; j < arr[i]; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
}
