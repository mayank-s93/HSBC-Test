package TestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
		
		plugin= {"pretty", "html:target/htmlreports"},
		features="src/test/java/Features/RatesAPIValidation.feature",
		glue= {"StepDefinition"},
		tags= {"@test"}
		
		
		)
public class Runner {
	
	
}
