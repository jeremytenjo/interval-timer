import { test } from '@playwright/test'

import testCreateTimer from './testCreateTimer'

test('Create timer', async ({ page }) => {
  await testCreateTimer({ page, timerName: 'Upper Body' })
})
