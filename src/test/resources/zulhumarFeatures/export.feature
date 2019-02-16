 @BRIT-4026
Feature: Export function

  Background:from homepage to login page
    Given user on the homepage with URL
    When user choose BriteErPDemo
    Then user should be in login page

  Scenario: Export module
    When user enters "inm5@info.com" and  "trt332qWW12"
    Then user in inventory page
    And user clicks on Warehouse management
    Then user should see Warehouses option
    And user clicks on Warehouses
    Then user should see Chicago WareHouse is displayed
    And user click on the checkbox
    Then user goes to Actions dropdown list and click on export


