import { test } from '@playwright/test'

import testCreateTimer from './createTimer.spec.js'

test('Create timer', async ({ page }) => {
  await testCreateTimer({ page, timerName: 'Upper Body' })
})
