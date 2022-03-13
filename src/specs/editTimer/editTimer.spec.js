// https://playwright.dev/docs/input#mouse-click
import { expect } from '@playwright/test'

export default async function editTimerTest({ page, timerName }) {
  await page.goto('/')

  const editTimerForm = page.locator('data-id=CreateTimerForm')
  await expect(editTimerForm).toBeTruthy()

  await page.fill('#timer-name', timerName)

  await page.click('button[data-id=editTimerSaveButton]')

  const countdownTimer = page.locator('aria-label="Countdown timer"')
  await expect(countdownTimer).toBeTruthy()

  const text = await page.innerText('[data-id=selectedTimerHeader]')
  expect(text).toBe(timerName)
}
