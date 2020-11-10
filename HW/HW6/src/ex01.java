class Matrix {
	
	public void printMatrix(int[][] arr)	{
		for(int i = 0; i < arr.length; i++)	{
			for(int j = 0; j < arr[i].length; j++)
			System.out.print(arr[i][j] + " ");
		System.out.println();
		}
		System.out.println();

	}
	
	public void addMatrix(int[][] arr1, int[][] arr2, int[][] arr3)	{
		for(int i = 0; i < arr3.length; i++)	{
			for(int j = 0; j < arr3[i].length; j++)
			arr3[i][j] = arr1[i][j] + arr2[i][j];
		}
		
	}
}

public class ex01 {

	public static void main(String[] args) {
		 int[][] a = { { 1, 2, 3 }, { 4, 5, 6 } };
		 int[][] b = { { 6, 3, 4 }, { 5, 1, 2 } };
		 int[][] c = new int[2][3];
		 Matrix mx = new Matrix();
		 System.out.println("행렬 a");
		 mx.printMatrix(a);
		 System.out.println("행렬 b");
		 mx.printMatrix(b);
		 System.out.println("행렬 c");
		 mx.addMatrix(a, b, c);
		 mx.printMatrix(c);
		 }

}
