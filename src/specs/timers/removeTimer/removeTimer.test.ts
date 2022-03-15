// https://playwright.dev/docs/selectors
import { expect, type Page } from '@playwright/test'

type RemoveTimerProps = {
  page: Page
}

export default async function removeTimer({ page }: RemoveTimerProps) {
  page.click('[data-id=editTimerButton]')
  page.click('text=Remove')
  page.click('[data-id=ConfirmationDialogConfirmButton]')
  expect(page.locator('h1.title')).toContainText('Create Timer')
}
