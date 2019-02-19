@BRIT-546 @login
Feature: login function

# open chrome
  Background:from homepage to login page
    Given user on the homepage with URL
    When user choose BriteErPDemo
    Then user should be in login page

  @InventoryManager
  Scenario: login as a Inventory Manager
    When user enters "inm5@info.com" and  "trt332qWW12"
    Then user should be logged in as a "<type>"


  @InventoryUser
  Scenario: login as a Inventory User
    When user enters "in3@info.com" and  "alsfuh7we72"
    Then user should be logged in as a "<type>"



  Scenario Outline: login as different <type>
    When user enters "<email>" and  "<password>"
    Then user should be logged in as a "<type>"


    Examples:
      | email         | password    | type             |
      | inm5@info.com | trt332qWW12 | InventoryManager |
      | in4@info.com  | alsfuh7we73 | InventoryUser    |
		      
		      