// Generated from: features\Login.feature
import { test } from "playwright-bdd";

test.describe('Validate the login page', () => {

  test('Verify teh user can able to login to the portal using valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User should be in login page', null, { page }); 
    await When('Enter valid user name and password', null, { page }); 
    await And('Click the button login', null, { page }); 
    await Then('User should be sucessfully logged in to the application', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should be in login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Enter valid user name and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And Click the button login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should be sucessfully logged in to the application","stepMatchArguments":[]}]},
]; // bdd-data-end