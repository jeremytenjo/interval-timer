import { registerPlugin } from '@capacitor/core'

import type { ExamplePlugin } from './definitions'

const Echo = registerPlugin<ExamplePlugin>('Example', {
  web: () => import('./web').then((m) => new m.ExampleWeb()),
})

export * from './definitions'
export { Echo }
