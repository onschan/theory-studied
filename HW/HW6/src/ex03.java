import java.util.Scanner;

class MonthSchedule {
	Scanner sc = new Scanner(System.in);
	
	private int num;
	private Day[] day;
	
	MonthSchedule(int num)	{
		this.num = num;
		this.day = new Day[num];
		for(int i = 0; i < num; i++)
			day[i] = new Day();
	}
		
	public void input()	{
		System.out.print("날짜(1~30)?");
		int date = sc.nextInt();
		if(date > num || date < 1) {
			System.out.println("1~" + num +"사이의 값을 입력하십시오.");
			return;
		}
		if(day[date-1].get() == null) {
			System.out.print("할일(빈칸없이입력)?");
			String newWork = sc.next();
			day[date - 1].set(newWork);
		}
		else
			System.out.println("할 일이 이미 있습니다.");
	}
	
	public void view()	{
		System.out.print("날짜(1~30)?");
		int date = sc.nextInt();
		System.out.print(date + "일의 할 일은 ");
		day[date - 1 ].show();
	}
	
	public void finish()	{
		System.out.println("프로그램을 종료합니다.");
	}
}


class Day {
	private String work; // 하루의 할 일을 나타내는 문자열
	
	public void set(String work) { this.work = work; }
	public String get() { return work; }
	public void show() {
		if(work == null) System.out.println("없습니다.");
		else System.out.println(work + "입니다.");
	}
}

public class ex03 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		MonthSchedule ms = new MonthSchedule(30);
	
		System.out.println("이번달 스케쥴 관리 프로그램");

		while(true) {
			System.out.print("할일(입력:1, 보기:2, 끝내기:3) >>");
			int menu = scanner.nextInt();
			switch (menu) {
			case 1: ms.input(); break;
			case 2: ms.view(); break;
			case 3: ms.finish(); return;
			default: System.out.println("잘못입력하였습니다.");
			}
			System.out.println();
		}
	}
}

