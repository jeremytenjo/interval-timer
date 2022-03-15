// https://playwright.dev/docs/selectors
import { expect, type Page } from '@playwright/test'

type RemoveTimerProps = {
  page: Page
}

export default async function removeTimer({ page }: RemoveTimerProps) {
  const header = await page.innerText('h1')
  expect(header).toBe('Home Page')
}
