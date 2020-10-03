$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/RatesAPIValidation.feature");
formatter.feature({
  "name": "Validate Rates API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify response for future date should be current date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SixthTest"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cFuture date\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify current \"\u003cKey\u003e\" Recived in Response for future date exchange",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Method",
        "Code",
        "Key",
        "Future date"
      ]
    },
    {
      "cells": [
        "Get",
        "200",
        "date",
        "2020-10-20"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify response for future date should be current date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SixthTest"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.rates_API_for_Latest_Foreign_Exchange_rates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"Get\" http request with \"2020-10-20\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.callMethods(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validateStatusCode(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify current \"date\" Recived in Response for future date exchange",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Recived_in_Response_for_future_date(String)"
});
formatter.result({
  "status": "passed"
});
});