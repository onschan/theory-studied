import java.util.Arrays;

class Circle implements Comparable{
	private String name;
	private int radius;
	
	public Circle(String name, int radius) {
		this.name = name;
		this.radius = radius;
	}
	
	public int compareTo(Object o) {
		 Circle c = (Circle)o;
		 return this.radius - c.radius;
		}
	
	public double area() {
		return 3.14 * radius * radius; 
	}
	
	public String getName() {
		return name;
	}
}

public class ex03 {

	public static void main(String[] args) {
		Circle[] c = { new Circle("Cup", 3),
				new Circle("Apple", 4),
				new Circle("Doughnut", 5),
				new Circle("Pizza", 7),
				new Circle("Ball", 2) };
		
		Arrays.sort(c);
		
		int index = 0;
		
		for(int i = 0; i < 5; i++) {
			System.out.println(c[i].getName() + " " + c[i].area());
			if(c[i].getName() == "Apple")
				index = i;
		}
		System.out.println("Index of Apple : " + index);
	}
}

