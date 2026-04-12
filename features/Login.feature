Feature: Validate the login page
Scenario: Verify teh user can able to login to the portal using valid credentials

Given User should be in login page
When Enter valid user name and password
And Click the button login
Then User should be sucessfully logged in to the application