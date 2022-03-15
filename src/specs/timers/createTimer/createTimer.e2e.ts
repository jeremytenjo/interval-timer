import { test } from '@playwright/test'

import testCreateTimer from './createTimer.test'

test('Create timer', async ({ page }) => {
  await testCreateTimer({ page, timerName: 'Upper Body' })
})
