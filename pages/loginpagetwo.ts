import { Page, Locator, expect } from '@playwright/test';

export class Loginpagetwo {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly allowCookiesButton: Locator;
  readonly homeLink: Locator;
  readonly loadMoreButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.signInLink = page.locator('[data-test="a-sign-in"]');
    this.emailInput = page.getByTestId('txt-email');
    this.passwordInput = page.getByTestId('txt-password');
    this.signInButton = page.getByTestId(
      'btn-Sign in, please enter your username and password'
    );
    this.allowCookiesButton = page.getByRole('button', { name: /allow cookies/i });
    this.homeLink = page.getByTestId('a-home-link');
    this.loadMoreButton = page.getByTestId('div-btn-load-more');
  }

  // Navigate using baseURL
  async gotoHomePage() {
    await this.page.goto('/Home/Job');
  }

  // Login action
  async entercredentials(username: string, password: string) {
    await this.signInLink.click();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    
  }

  // Handle cookie popup safely
  async proceedwithlogin() {
    await this.signInButton.click();
  }

  // Verify successful login
  async verifyLoginSuccess() {
    await expect(this.homeLink).toBeVisible();
    //await this.page.pause();
  }

  
}
//push new two
