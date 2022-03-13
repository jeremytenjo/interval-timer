import { test } from '@playwright/test'

import testCreateTimer from './testCreateTimer.js'

test('Create timer', async ({ page }) => {
  await testCreateTimer({ page, timerName: 'Upper Body' })
})
