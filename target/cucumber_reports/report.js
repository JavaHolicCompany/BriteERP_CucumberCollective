$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/export.feature");
formatter.feature({
  "name": "Export function",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BRIT-4026"
    },
    {
      "name": "@export"
    }
  ]
});
formatter.background({
  "name": "from homepage to login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the homepage with URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_on_the_homepage_with_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose BriteErPDemo",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_choose_BriteErPDemo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Export module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BRIT-4026"
    },
    {
      "name": "@export"
    }
  ]
});
formatter.step({
  "name": "user enters \"inm5@info.com\" and  \"trt332qWW12\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "ExportStepDef.user_in_inventory_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//li[@style\u003d\u0027display: block;\u0027])[6]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.45.615355 (d5698f682d8b2742017df6c81e0bd8e6a3063189),platform\u003dMac OS X 10.14.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Zulhumars-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:146a:8aa4:530d:c81e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615355 (d5698f682d8b27..., userDataDir: /var/folders/1k/8vg8lrln7yb...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51560}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: 225eca82dc44e5f7bf99fa676465446b\n*** Element info: {Using\u003dxpath, value\u003d(//li[@style\u003d\u0027display: block;\u0027])[6]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat stepDefinitions.ExportStepDef.user_in_inventory_page(ExportStepDef.java:14)\n\tat ✽.user in inventory page(src/test/resources/features/export.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Warehouse management",
  "keyword": "And "
});
formatter.match({
  "location": "ExportStepDef.user_clicks_on_Warehouse_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Warehouses option",
  "keyword": "Then "
});
formatter.match({
  "location": "ExportStepDef.user_should_see_Warehouses_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Warehouses",
  "keyword": "And "
});
formatter.match({
  "location": "ExportStepDef.user_clicks_on_Warehouses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Chicago WareHouse is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExportStepDef.user_should_see_Chicago_WareHouse_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "ExportStepDef.user_click_on_the_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user goes to Actions dropdown list and click on export",
  "keyword": "Then "
});
formatter.match({
  "location": "ExportStepDef.user_goes_to_Actions_dropdown_list_and_click_on_export()"
});
formatter.result({
  "status": "skipped"
});
});