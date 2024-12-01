import { expect, test } from '@playwright/test'

import { login } from '../utils/login'

test.describe('Settings Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page)
  })

  test('should save settings correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Settings' }).click()
    await expect(page).toHaveURL(/\/settings/)

    await page.getByPlaceholder('Calories').fill('2000')
    await page.getByPlaceholder('Protein').fill('100')
    await page.getByPlaceholder('Fat').fill('90')
    await page.getByPlaceholder('Carbohydrates').fill('80')
    await page.getByRole('button', { name: 'Save' }).click()

    await page.reload()
    await page.getByRole('link', { name: 'Settings' }).click()

    await expect(page).toHaveURL(/\/settings/)
    await expect(page.getByPlaceholder('Calories')).toHaveValue('2000')
    await expect(page.getByPlaceholder('Protein')).toHaveValue('100')
    await expect(page.getByPlaceholder('Fat')).toHaveValue('90')
    await expect(page.getByPlaceholder('Carbohydrates')).toHaveValue('80')
  })
})
