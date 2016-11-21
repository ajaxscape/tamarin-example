Feature: Sign in to
  Using a web browser
  I want to sign in to the automation practice page

  Scenario: Sign in Unsuccessfully
    Given I visit the home page
    Then I should see at least 10 products
    And I sign in with the test user
    Then I expect to see the text "Authentication failed."