 Feature: Validate Rates API

@FirstTest @test
Scenario Outline: Verify success status for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
 Examples:
 
 |Method  | Resource | Code |
 |Get     | latest   | 200  |
 
 
 
 @SecondTest @test
Scenario Outline: Verify success status and assert response for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
And Verify "<Key>" in response is "<Value>"
 Examples:
 
 |Method  | Resource | Code | Key  | Value  |
 |Get     | latest   | 200  | date | latest |
 
 
  @ThirdTest  @test
Scenario Outline: Verify Error code for incorrect URI for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>

 Examples:
 
 |Method  | Resource | Code | 
 |Get     |          | 400  | 
 
  @FourthTest @test
Scenario Outline: Verify success status for given date
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
 Examples:
 
 |Method  | Resource     | Code |
 |Get     | 2020-09-18  | 200  |
 
 
 
 @FifthTest @test
Scenario Outline: Verify success status and assert response for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
And Verify "<Key>" in response is "<Resource>"
 Examples:
 
 |Method  | Resource     | Code | Key | 
 |Get     | 2020-09-18   | 200  | date| 
 
  @SixthTest @test
Scenario Outline: Verify response for future date should be current date
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Future date>"    
Then the API call got status code <Code>
And Verify current "<Key>" Recived in Response for future date exchange
 Examples:
 
 |Method  | Code | Key | Future date |
 |Get     | 200  | date| 2020-10-20  |
 
 # Before execution , we need to modify data according to scenario because these data are date dependent
 
 