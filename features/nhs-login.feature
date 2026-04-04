Feature: NHS Jobs Login

  Scenario: User logs in successfully
    Given the user is on the NHS Jobs home page
    When the user logs in with valid credentials
    Then the user should be logged in successfully
    Then click the loadmore button