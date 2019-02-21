@pm
Feature: Product Move Function

  Background:from homepage to login page
      Given user on the homepage with URL
      When user choose BriteErPDemo
      Then user should be in login page
      When user enters "inm5@info.com" and  "trt332qWW12"
      Then user in inventory page
      And user clicks on Product Move
      Then user in ProductMove page

  Scenario:
    When user select random product with Done status
    Then user is shown Action tab
    And user click on Action
    Then user is shown Delete option
    And user click on Delete
    Then user is shown confirmation
    And user clicks Ok
    Then user is shown Error Message
    Then user logout


  Scenario:
    When user reset search filter
    And user select ToDo filter
    Then user select random product with Available status
    And user click on Action
    Then user is shown Delete option
    And user click on Delete
    Then user is shown confirmation
    And user clicks Ok
    Then user confirm product deleted
    Then user logout

  Scenario:
    When user reset search filter
    Then user select AddCustomFilter option
    And user select Product in DropDown1
    And user select Contains in DropDown2
    And user enters Laptop in search keyword
    And user clicks Apply button
    Then user is shown Products that applies to custom filter
    Then user logout

  Scenario:
    When user reset search filter
    And user select ToDo filter
    Then user is shown Products with ToDo status
    Then user logout


