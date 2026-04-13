import 'dotenv/config';
import { createBdd, test } from 'playwright-bdd';
import { Loginpagetwo } from '../pages/loginpagetwo';
const { Given, When, Then } = createBdd(test);



Given('User should be in login page', async ({ page }) => {
  const loginPage = new Loginpagetwo(page);
  await loginPage.gotoHomePage();
});

When('Enter valid user name and password', async ({ page }) => {
  const username = process.env.USER_NAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error('USER_NAME or PASSWORD missing in .env');
  }

  const loginPage = new Loginpagetwo(page);
  await loginPage.entercredentials(username, password);
   
});

When ('Click the button login', async ({page}) => {

  const loginPage = new Loginpagetwo(page);
  await loginPage.proceedwithlogin();
});
 

Then('User should be sucessfully logged in to the application', async ({ page }) => {
  const loginPage = new Loginpagetwo(page);
  await loginPage.verifyLoginSuccess();
});

//Commited to Loginpage repo

