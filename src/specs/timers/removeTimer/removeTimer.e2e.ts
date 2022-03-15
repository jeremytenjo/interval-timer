import { test } from '@playwright/test'

import createTimer from '../createTimer/createTimer.test'

import removeTimer from './removeTimer.test'

test('Remove timer', async ({ page }) => {
  await createTimer({ page, timerName: 'Upper' })
  await removeTimer({ page })
})
