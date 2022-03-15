import { test } from '@playwright/test'

import testCreateTimer from '../createTimer/createTimer.test'

import testEditTimer from './editTimer.test'

const timerName = 'Lower Workout'

test('Edit timer', async ({ page }) => {
  await testCreateTimer({ page, timerName })
  await testEditTimer({ page, timerName })
})
