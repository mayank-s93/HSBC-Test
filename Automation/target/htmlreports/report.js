$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/RatesAPIValidation.feature");
formatter.feature({
  "name": "Validate Rates API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify success status for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Method",
        "Resource",
        "Code"
      ]
    },
    {
      "cells": [
        "Get",
        "latest",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify success status for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    },
    {
      "name": "@test"
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
  "name": "user calls \"Get\" http request with \"latest\"",
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
formatter.scenarioOutline({
  "name": "Verify success status and assert response for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SecondTest"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify \"\u003cKey\u003e\" in response is \"\u003cValue\u003e\"",
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
        "Resource",
        "Code",
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Get",
        "latest",
        "200",
        "date",
        "latest"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify success status and assert response for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SecondTest"
    },
    {
      "name": "@test"
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
  "name": "user calls \"Get\" http request with \"latest\"",
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
  "name": "Verify \"date\" in response is \"latest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Error code for incorrect URI for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ThirdTest"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Method",
        "Resource",
        "Code"
      ]
    },
    {
      "cells": [
        "Get",
        "",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Error code for incorrect URI for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ThirdTest"
    },
    {
      "name": "@test"
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
  "name": "user calls \"Get\" http request with \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.callMethods(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validateStatusCode(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify success status for given date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FourthTest"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Method",
        "Resource",
        "Code"
      ]
    },
    {
      "cells": [
        "Get",
        "2020-09-18",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify success status for given date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FourthTest"
    },
    {
      "name": "@test"
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
  "name": "user calls \"Get\" http request with \"2020-09-18\"",
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
formatter.scenarioOutline({
  "name": "Verify success status and assert response for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FifthTest"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Rates API \"Base_URL\" for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"\u003cMethod\u003e\" http request with \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got status code \u003cCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify \"\u003cKey\u003e\" in response is \"\u003cResource\u003e\"",
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
        "Resource",
        "Code",
        "Key"
      ]
    },
    {
      "cells": [
        "Get",
        "2020-09-18",
        "200",
        "date"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify success status and assert response for RatesAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FifthTest"
    },
    {
      "name": "@test"
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
  "name": "user calls \"Get\" http request with \"2020-09-18\"",
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
  "name": "Verify \"date\" in response is \"2020-09-18\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify response for future date should be current date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SixthTest"
    },
    {
      "name": "@test"
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
    },
    {
      "name": "@test"
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