abstract class Shape {
	private int length, width, radius;
	private String name;
	public Shape(String name, int radius) {
		this.name = name;
		this.radius = radius;
	}
	public Shape(String name, int length, int width) {
		this.name = name;
		this.length = length;
		this.width = width;
	}
	public int getLen() { return length; }
	public int getWid() { return width; }
	public int getRad() { return radius; }
	
	public double getArea() {
		return length * width;
	}
	
	public String getName() {
		return name;
	}
}

class Circle extends Shape{
	private double PI = 3.14;
	public Circle(String name, int radius) {
		super(name, radius);
	}
	public double getArea() {
		return PI * super.getRad() * super.getRad();
	}
}

class Rectangle extends Shape{
	public Rectangle(String name, int length, int width) {
		super(name, length, width);
	}
	public double getArea() {
		return super.getLen() * super.getWid();
	}
}

class Triangle extends Shape{
	public Triangle(String name, int length, int width) {
		super(name, length, width);
	}
	public double getArea() {
		return super.getLen() * super.getWid() * 0.5;
	}
}
public class ex02 {

	public static void main(String[] args) {
		Shape[] arr = { new Circle("Circle", 5),
				 new Rectangle("Rectangle", 3, 4),
				new Triangle("Triangle", 5, 5)
				 };

				 double sum = 0;
				 for (Shape a : arr) {
				System.out.println(a.getName() + "면적 : " + a.getArea());
				sum += a.getArea();
				 }
				 System.out.println("면적의 합 : " + sum);

	}

}
