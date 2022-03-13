import { test } from '@playwright/test'

import createTimerTest from '../createTimer/createTimer.spec.js'

import testTimerTest from './editTimer.spec.js'

const timerName = 'Lower Workout'

test('Edit timer', async ({ page }) => {
  await createTimerTest({ page, timerName })
  await testTimerTest({ page, timerName })
})
