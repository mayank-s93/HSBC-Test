 Feature: Validate Rates API

@FirstTest
Scenario Outline: Verify success status for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
 Examples:
 
 |Method  | Resource | Code |
 |Get     | latest   | 200  |
 
 
 
 @SecondTest
Scenario Outline: Verify success status and assert response for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
And "<Key>" in response is "<Value>"
 Examples:
 
 |Method  | Resource | Code | Key | Value |
 |Get     | latest   | 200  | rates.GBP | 0.90673|
 
 
  @ThirdTest
Scenario Outline: Verify Error code for incorrect URI for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>

 Examples:
 
 |Method  | Resource | Code | 
 |Get     |          | 400  | 
 
  @FourthTest
Scenario Outline: Verify success status for given date
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
 Examples:
 
 |Method  | Resource     | Code |
 |Get     | 2020-09-18  | 200  |
 
 
 
 @FifthTest
Scenario Outline: Verify success status and assert response for RatesAPI
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Resource>"
Then the API call got status code <Code>
And "<Key>" in response is "<Resource>"
 Examples:
 
 |Method  | Resource     | Code | Key | 
 |Get     | 2020-09-18   | 200  | date| 
 
  @SixthTest
Scenario Outline: Verify response for future date should be current date
Given Rates API "Base_URL" for Latest Foreign Exchange rates
When user calls "<Method>" http request with "<Future date>"    
Then the API call got status code <Code>
And "<Key>" in response is "<Resource>"
 Examples:
 
 |Method  | Resource     | Code | Key | Future date |
 |Get     | 2020-10-02   | 200  | date| 2020-10-20  |
 
 # Before execution , we need to modify data according to scenario because these data are date dependent
 
 