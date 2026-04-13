import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
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
  async login(username: string, password: string) {
    await this.signInLink.click();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  // Handle cookie popup safely
  async acceptCookiesIfVisible() {
    const isVisible = await this.allowCookiesButton.isVisible().catch(() => false);
    if (isVisible) {
      await this.allowCookiesButton.click();
      await this.page.pause();
    }
  }

  // Verify successful login
  async verifyLoginSuccess() {
    await expect(this.homeLink).toBeVisible();
    await this.page.pause();
  }

  // Optional: Click "Load More" until it disappears
  async clickLoadMore() {
    
    await this.page.pause();  
    while (await this.loadMoreButton.isVisible().catch(() => false)) { 
    await this.page.pause();
    await this.loadMoreButton.scrollIntoViewIfNeeded(); 
    await this.loadMoreButton.click(); 
    }
  }
}
//Commited to new Repository