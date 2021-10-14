import { injectHtml } from 'vite-plugin-html'

import { PayloadTypes } from '../../config'

import gtag from './items/gtag'

export default function viteHtmlPlugin(payload: PayloadTypes) {
  return injectHtml({
    data: {
      title: 'My Interval Timer',
      gtag: gtag(payload),
    },
  })
}
