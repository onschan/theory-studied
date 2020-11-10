class Circle {
	private int radius;
	private String name;
	
	double area = radius * radius * 3.14;
	
	public Circle(String newName, int newRadius)
	{
		name = newName;
		radius = newRadius;
	}
	
	public void setRad(int newRad)
	{
		if(newRad >= 0) {
			radius = newRad;
			area = radius * radius * 3.14;
		}
	}
	public String getName()
	{
		return name;
	}
	public double getArea()
	{
		return area;
	}
	public void show()
	{
		System.out.println(name + "넓이 : " + area);
	}
}

public class ex04 {

	public static void main(String[] args) {
		Circle c1 = new Circle("Pizza", 0);
		Circle c2 = new Circle("donut", 0);
		Circle c3 = new Circle("hamburger", 0);
		
		c1.setRad(12);
		c2.setRad(-2);
		c3.setRad(7);
		
		c1.show();
		c2.show();
		c3.show();
		
		System.out.println("가장 큰 면적은" + c1.getName());
	}
}
