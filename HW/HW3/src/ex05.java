class Calc
{
	private int a,b;
	private char operation;
	
	public void setValue(int newA, int newB, char newOper)
	{
		a = newA;
		b = newB;
		operation = newOper;
	}
	public void result()
	{
		if (operation == '+')
		{
			add();
		}
		else if (operation == '-')
		{
			sub();
		}
		else if (operation == '*')
		{
			mul();
		}
		else if (operation == '/')
		{
			div();
		}
		else
		{
			System.out.println("잘못된 연산자입니다.");
		}
	}
	public void add()
	{
		System.out.println("result = " + (a + b));
	}
	public void sub()
	{
		System.out.println("result = " + (a - b));
	}
	public void mul()
	{
		System.out.println("result = " + (a * b));
	}
	public void div()
	{
		System.out.println("result = " + (a / b));
	}
	
}
public class ex05 {

	public static void main(String[] args) {
		 Calc c = new Calc();
		 c.setValue(2, 5, '+');
		 c.result();
		 c.setValue(2, 5, '$');
		 c.result();
		 c.setValue(2, 5, '-');
		 c.result();
		 c.setValue(2, 5, '*');
		 c.result();
		 c.setValue(2, 5, '/');
		 c.result();

	}

}
