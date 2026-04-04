// Generated from: features\nhs-login.feature
import { test } from "playwright-bdd";

test.describe('NHS Jobs Login', () => {

  test('User logs in successfully', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the NHS Jobs home page', null, { page }); 
    await When('the user logs in with valid credentials', null, { page }); 
    await Then('the user should be logged in successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\nhs-login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the NHS Jobs home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user logs in with valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end