package MavenDemo;

import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
 
import org.testng.annotations.Test;
 
public class Testfacebook {
 
	@Test
	public void TestFireFox(){
	 
	//	System.setProperty("webdriver.gecko.driver","/Users/a419449/selenium_driver/geckodriver");
	//    WebDriver driver = new FirefoxDriver();
	 
		System.setProperty("webdriver.chrome.driver","/Users/a419449/selenium_driver/chromedriver");
		WebDriver driver = new ChromeDriver();
	//    driver.manage().window().maximize();
	 
	    driver.get("http://www.facebook.com");
	 
	    driver.quit();
	}
}