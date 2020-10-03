package StepDefinition;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.cucumber.java.en.Then;
import static org.junit.Assert.*;

import java.io.IOException;
import java.util.Properties;
import java.util.logging.ErrorManager;

import org.junit.rules.ExpectedException;

import com.fasterxml.jackson.databind.ObjectMapper;

import Pojo.GetRates;
import Resource.Utils;
import io.cucumber.java.en.And;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class StepDefinition extends Utils {

	RequestSpecification req_Spec;
	Response response;
	String resp;
	JsonPath js;
	
	public ExpectedException exception= ExpectedException.none();
	
	@Given("Rates API {string} for Latest Foreign Exchange rates")
	public void rates_API_for_Latest_Foreign_Exchange_rates(String baseUri) throws IOException {
		
		req_Spec=given().log().all().baseUri(getGlobalValue(baseUri));       //Getting base URL from properties file
		System.out.println("Given Section Executed");
		
	}

	@When("user calls {string} http request with {string}")
	public void callMethods(String method, String resource) {
		System.out.println("Calling "+method+" Method for Resource "+resource);
		if(method.equalsIgnoreCase("Get"))                 // selecting method based on user input , we can add other method in if-else based on requirement
		response=req_Spec.when().get("/api/"+resource);    //Here i am taking end point from users
		
	}


	@Then("the API call got status code {int}")
	public void validateStatusCode(Integer code) {
		
		if(code==200)
		    response.then().log().all().assertThat().statusCode(code).body("base", equalTo("EUR")); //Verifying status code and base value when request is successful because then only base currency will display  
		else 
			response.then().log().all().assertThat().statusCode(code);	
		
	
		System.out.println("Content Type in header is : "+response.getHeader("Content-Type"));
		System.out.println("Status code is : "+response.getStatusCode());
		System.out.println("Status Message is : "+response.getStatusLine());
	}


	@And("Verify {string} in response is {string}")
	public void in_response_is(String key, String Expectedvalue) {
		
		//Approach 1------------------------------------------------------------------------Working as expected
		
		   resp=response.asString(); // to get response in String
		   js=new JsonPath(resp);
		   
		   if(key.equalsIgnoreCase("date") && Expectedvalue.equalsIgnoreCase("latest")) {
			   
			   assertEquals(js.getString(key),getDate()); 
			   System.out.println("For "+key+" Value in response is"+js.getString(key));
		   }
		   else {
		 assertEquals(js.getString(key),Expectedvalue);                                // Validating values provided by scenario with the response
		 System.out.println("For "+key+" Value is "+js.getString(key));
		   }
		
		
		
		//Approch 2 with Pojo class----------------Main POJO class working is fine but Issue with nested pojo class. rate value showing null
		
		/*
		System.out.println("control is here");
		 GetRates resp = response.getBody().as(GetRates.class);
		
		
		if(key.equalsIgnoreCase("date")) {                           // Able to get value from pojo class for date
			assertEquals(resp.getDate(), Expectedvalue);
			System.out.println("Date is : "+resp.getDate());
			
		}
		else if(key.equalsIgnoreCase("ILS")) {                      // For nested Pojo , it is returning Null value
			
			assertEquals(resp.getRates().getILS(), Expectedvalue);
			System.out.println("ILS Value against EUR is : "+resp.getRates().getILS());
			
		}
		else if(key.equalsIgnoreCase("base")) {                       // Able to get value from pojo class for base
			assertEquals(resp.getBase(), Expectedvalue);
			System.out.println("Base Currency  is : "+resp.getBase());
			
		}
		
		
		*/
		
	}
	
	@And("Verify current {string} Recived in Response for future date exchange")
	public void Recived_in_Response_for_future_date(String key) {
		resp=response.asString(); 
		   js=new JsonPath(resp);
		   assertEquals(js.getString(key),getDate()); 
		   System.out.println("For Future date  rates we recived date -"+js.getString(key)+", which is current date");
		
	}
	
	

}
