// https://playwright.dev/docs/selectors
import { expect, type Page } from '@playwright/test'

type EditTimerTestProps = {
  page: Page
  timerName: string
}

export default async function testEditTimer({ page, timerName }: EditTimerTestProps) {
  const newTimerExtra = '!!!'
  const newTimerName = `${timerName}${newTimerExtra}`

  const text = await page.innerText('[data-id=selectedTimerHeader]')
  expect(text).toBe(timerName)
  await page.click('button[data-id=editTimerButton]')
  await page.fill('#timer-name', newTimerName)
  await page.click('button[data-id=editTimerSaveButton]')
  const countdownTimer = page.locator('aria-label="Countdown timer"')
  await expect(countdownTimer).toBeTruthy()
  const selectedTimeHeader = await page.innerText('[data-id=selectedTimerHeader]')
  expect(selectedTimeHeader).toBe(newTimerName)
}
