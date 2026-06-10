Feature: You can buy today's deals
  As a user
  I want to be able to buy today's deals
  So that I can save money

  Scenario: User buys today's deal
    Given I am on the homepage
    When I click on "Today's Deals"
    And I select a deal
    And I add it to my cart
    Then I should see the item in my cart