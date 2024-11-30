import { Page } from '@playwright/test'

const email = process.env.E2E_TEST_USER_EMAIL || ''
const password = process.env.E2E_TEST_USER_PASSWORD || ''

if (!email) {
  throw new Error('Environment variable E2E_TEST_USER_EMAIL is not set.')
}
if (!password) {
  throw new Error('Environment variable E2E_TEST_USER_PASSWORD is not set.')
}

/**
 * Logs in a test user using credentials from environment variables.
 *
 * @param page - The Playwright Page object to perform actions on.
 * @throws Will throw an error if the required environment variables are not set.
 */
export async function login(page: Page) {
  await page.goto('http://localhost:3000/landingpage')
  await page.getByRole('button', { name: 'Sign In' }).click()
  await page.getByPlaceholder('Enter your Email').fill(email)
  await page.getByPlaceholder('Enter your Password').fill(password)
  await page.getByRole('button', { name: 'Sign in', exact: true }).click()
}
