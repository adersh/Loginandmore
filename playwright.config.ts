/*
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

// Load .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['steps/*.ts'],
});

export default defineConfig({
  testDir,
  use: {
    baseURL: process.env.BASE_URL || 'https://apply.jobs.scot.nhs.uk',
    headless: false,
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});*/

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['steps/*.ts'],
  missingSteps: 'fail-on-gen'
});

export default defineConfig({
  testDir,
  use: {
    baseURL: process.env.BASE_URL || 'https://apply.jobs.scot.nhs.uk',
    headless: false,
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});