import 'dotenv/config';
import { createBdd, test } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';



const { Given, When, Then } = createBdd(test);

Given('the user is on the NHS Jobs home page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoHomePage();
});

When('the user logs in with valid credentials', async ({ page }) => {
  const username = process.env.USER_NAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error('USER_NAME or PASSWORD missing in .env');
  }

  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await loginPage.acceptCookiesIfVisible();
  
});

Then('the user should be logged in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.verifyLoginSuccess();
});

Then ('click on the load more button',async ({page})=>
{ const loginPage = new LoginPage(page);
  await loginPage.clickLoadMore();
})
//test
