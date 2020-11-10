class Song
{
	String title;
	String artist;
	int year;
	String country;
	
	public Song(String newTitle, String newArtist, int newYear, String newCountry)
	{
		title = newTitle;
		artist = newArtist;
		year = newYear;
		country = newCountry;
	}
	
	public void show()
	{
		System.out.println(year + "년 " + country + "국적의 " + artist + "가 부른 " + title);
	}
}
public class ex02 {

	public static void main(String[] args) {
		Song mySong = new Song("Dancing Queen", "ABBA", 1978, "스웨덴");
		mySong.show();
	}

}
