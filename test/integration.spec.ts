import { test, expect } from '@playwright/test'

test('should navigate to the react page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
})

test('should have stats', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/project/facebook-react/')
})