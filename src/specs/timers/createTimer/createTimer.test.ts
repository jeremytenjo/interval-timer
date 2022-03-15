// https://playwright.dev/docs/input#mouse-click
import { expect } from '@playwright/test'

export default async function createTimerTest({ page, timerName }) {
  await page.goto('/')

  const createTimerForm = page.locator('data-id=CreateTimerForm')
  await expect(createTimerForm).toBeTruthy()

  await page.fill('#timer-name', timerName)

  await page.click('button[data-id=editTimerSaveButton]')

  const countdownTimer = page.locator('aria-label="Countdown timer"')
  await expect(countdownTimer).toBeTruthy()

  const text = await page.innerText('[data-id=selectedTimerHeader]')
  expect(text).toBe(timerName)
}
