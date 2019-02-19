$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/zulhumarFeatures/login.feature");
formatter.feature({
  "name": "login function",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BRIT-546"
    },
    {
      "name": "@login"
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
  "error_message": "java.lang.ExceptionInInitializerError\n\tat utilities.Driver.getDriver(Driver.java:17)\n\tat stepDefinitions.LoginStepDef.user_on_the_homepage_with_URL(LoginStepDef.java:17)\n\tat ✽.user on the homepage with URL(src/test/resources/zulhumarFeatures/login.feature:6)\nCaused by: java.lang.NullPointerException\n\tat utilities.ConfigurationReader.\u003cclinit\u003e(ConfigurationReader.java:17)\n\tat utilities.Driver.getDriver(Driver.java:17)\n\tat stepDefinitions.LoginStepDef.user_on_the_homepage_with_URL(LoginStepDef.java:17)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user choose BriteErPDemo",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_choose_BriteErPDemo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "login as a Inventory Manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BRIT-546"
    },
    {
      "name": "@login"
    },
    {
      "name": "@InventoryManager"
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
  "status": "skipped"
});
formatter.step({
  "name": "user should be logged in as a \"\u003ctype\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_logged_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class utilities.ConfigurationReader\n\tat utilities.Driver.getDriver(Driver.java:17)\n\tat stepDefinitions.LoginStepDef.user_on_the_homepage_with_URL(LoginStepDef.java:17)\n\tat ✽.user on the homepage with URL(src/test/resources/zulhumarFeatures/login.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user choose BriteErPDemo",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_choose_BriteErPDemo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "login as a Inventory User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BRIT-546"
    },
    {
      "name": "@login"
    },
    {
      "name": "@InventoryUser"
    }
  ]
});
formatter.step({
  "name": "user enters \"in3@info.com\" and  \"alsfuh7we72\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be logged in as a \"\u003ctype\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_logged_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "login as different \u003ctype\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters \"\u003cemail\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be logged in as a \"\u003ctype\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "type"
      ]
    },
    {
      "cells": [
        "inm5@info.com",
        "trt332qWW12",
        "InventoryManager"
      ]
    },
    {
      "cells": [
        "in4@info.com",
        "alsfuh7we73",
        "InventoryUser"
      ]
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class utilities.ConfigurationReader\n\tat utilities.Driver.getDriver(Driver.java:17)\n\tat stepDefinitions.LoginStepDef.user_on_the_homepage_with_URL(LoginStepDef.java:17)\n\tat ✽.user on the homepage with URL(src/test/resources/zulhumarFeatures/login.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user choose BriteErPDemo",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_choose_BriteErPDemo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "login as different InventoryManager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BRIT-546"
    },
    {
      "name": "@login"
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
  "status": "skipped"
});
formatter.step({
  "name": "user should be logged in as a \"InventoryManager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_logged_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class utilities.ConfigurationReader\n\tat utilities.Driver.getDriver(Driver.java:17)\n\tat stepDefinitions.LoginStepDef.user_on_the_homepage_with_URL(LoginStepDef.java:17)\n\tat ✽.user on the homepage with URL(src/test/resources/zulhumarFeatures/login.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user choose BriteErPDemo",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_choose_BriteErPDemo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "login as different InventoryUser",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BRIT-546"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters \"in4@info.com\" and  \"alsfuh7we73\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be logged in as a \"InventoryUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_logged_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
});