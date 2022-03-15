import { test } from '@playwright/test'

import testCreateTimer from '../createTimer/testCreateTimer'

import testEditTimer from './testEditTimer.spec'

const timerName = 'Lower Workout'

test('Edit timer', async ({ page }) => {
  await testCreateTimer({ page, timerName })
  await testEditTimer({ page, timerName })
})
