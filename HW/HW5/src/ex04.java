class Circle {
	private int x, y, rad;
	
	public Circle(int rad) { this(0, 0, rad); }
	public Circle(int x, int y) { this(x,y,5); }
	public Circle(int x, int y, int rad) {
		this.x = x; this.y = y; this.rad = rad;
	}
	
	public String toString() {
		return "Circle(" + x + "," + y + ") " + "반지름" + rad;
	}
	
	public boolean equals(Circle b) {
		if(x == b.x && y == b.y) return true;
		else return false;
	}
}

public class ex04 {

	public static void main(String[] args) {

		Circle a = new Circle(2, 3, 30);
		Circle b = new Circle(5);
		Circle c = new Circle(2, 3);
	
		System.out.println("원 a : " + a);
		System.out.println("원 b : " + b);
		System.out.println("원 c : " + c);
		
		if (a.equals(b))
			System.out.println("같은 원");
		else
		System.out.println("서로 다른 원");
		if (a.equals(c))
			System.out.println("같은 원");
		else
		System.out.println("서로 다른 원");
		}
	}
