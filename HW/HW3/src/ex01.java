class TV {
	String brand;
	int year;
	int inch;
	
	public TV(String newBrand, int newYear, int newInch)
	{
		brand = newBrand;
		year = newYear;
		inch = newInch;
	}
	
	public void show()
	{
		System.out.println(brand + "에서 만든" + year + "년형 " + inch + "인치 TV");
	}
}



public class ex01 {

	public static void main(String[] args) {
		TV myTV = new TV("LG", 2017, 32);
		myTV.show();
	}

}
