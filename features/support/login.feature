Feature: Login
    As a user
    I can login to application

    Scenario: User can login to application
    When I fill login form
    And I click on submit button
    Then I expect to see application content