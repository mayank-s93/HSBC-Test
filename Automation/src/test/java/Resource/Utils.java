package Resource;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Utils {

	
	public String getGlobalValue(String key) throws IOException {
		
		Properties pr=new Properties();
		String currentDirectory= System.getProperty("user.dir");
		FileInputStream fs=new FileInputStream(currentDirectory+"\\src\\test\\java\\Resource\\Config.properties");
		pr.load(fs);
		String value=pr.getProperty(key);
		return value;
	}
}
