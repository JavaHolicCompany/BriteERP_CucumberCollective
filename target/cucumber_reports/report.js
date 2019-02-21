$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Dashboard.feature");
formatter.feature({
  "name": "dashboard function",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@delivery"
    }
  ]
});
formatter.background({
  "name": "go to inventory page",
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
  "status": "skipped"
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
formatter.step({
  "name": "user enters \"inm5@info.com\" and  \"trt332qWW12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go to inventory page",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardDef.user_go_to_inventory_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on delivery orders",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardDef.user_click_on_delivery_orders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see all the delivery orders",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardDef.user_should_see_all_the_delivery_orders()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Inventory manager should be able to create delivery orders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delivery"
    }
  ]
});
formatter.step({
  "name": "user click on create button",
  "keyword": "When "
});
formatter.match({
  "location": "DashboardDef.user_click_on_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Leave all information boxes blank",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardDef.leave_all_information_boxes_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click save",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Deliver ticket created should be showing on the delivery orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardDef.deliver_ticket_created_should_be_showing_on_the_delivery_orders_page()"
});
formatter.result({
  "status": "skipped"
});
});