package Resource;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

public class Utils {

	 String yestrdayDate=null;
	
	public String getGlobalValue(String key) throws IOException {
		
		Properties pr=new Properties();
		String currentDirectory= System.getProperty("user.dir");
		FileInputStream fs=new FileInputStream(currentDirectory+"\\src\\test\\java\\Resource\\Config.properties");
		pr.load(fs);
		String value=pr.getProperty(key);
		return value;
	}
	
	public String getDate() {
		
		Calendar cal =Calendar.getInstance();
		cal.add(Calendar.DATE, -1);
		DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");	
		yestrdayDate=dateFormat.format(cal.getTime());
		return yestrdayDate;
		
	}
}
