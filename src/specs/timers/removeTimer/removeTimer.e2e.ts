import { test } from '@playwright/test'

import createTimer from '../createTimer/createTimer.test'

import removeTimer from './removeTimer.test'

test('Testname', async ({ page }) => {
  await createTimer({ page, timerName: 'Upper' })
  await removeTimer({ page })
})
