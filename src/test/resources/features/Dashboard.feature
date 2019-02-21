@delivery
Feature: dashboard function
  Background: go to inventory page
    Given user on the homepage with URL
    When user choose BriteErPDemo
    Then user should be in login page
    And user enters "inm5@info.com" and  "trt332qWW12"
    And user go to inventory page
    And user click on delivery orders
    Then user should see all the delivery orders



    Scenario: Inventory manager should be able to create delivery orders
      When user click on create button
      And click save
      Then Deliver ticket created should be showing on the delivery orders page

    Scenario: Inventory manager should be able to edit Delivery Orders
      When Open one delivery order
      And click on edit button on top
      And Change scheduled date
      And click on save
      Then Scheduled date should be changed

    Scenario:Inventory manager should be able to discard the changes made to delivery order
      When Open one delivery order
      And click on edit button on top
      And Change scheduled date
      And click on save
      Then click on discard
      And click ok
      Then Scheduled date should not be changed

