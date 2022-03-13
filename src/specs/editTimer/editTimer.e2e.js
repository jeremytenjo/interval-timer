import { test } from '@playwright/test'

import testCreateTimer from '../createTimer/testCreateTimer.js'

import testEditTimer from './testEditTimer.spec.js'

const timerName = 'Lower Workout'

test('Edit timer', async ({ page }) => {
  await testCreateTimer({ page, timerName })
  await testEditTimer({ page, timerName })
})
