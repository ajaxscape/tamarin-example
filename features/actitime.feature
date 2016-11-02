Feature: Explore Actitime
  Using a web browser
  I want to perform a Google search

  Scenario: Actitime
    Given I visit https://www.actitime.com/
    Then I expect the "_ym_isad" cookie to be "2"
    And I expect the "_ym_uid" cookie to exist
    And I expect the title to be "actiTIME - Time Tracking Software"
    And I click "Features in detail" link within "Features"
    Then I expect the title to be "Time Tracking Software | actiTIME Features"
    And I expect the heading to be "Features in Detail"
    And I expect the url to contain "features-in-detail.html"