import { injectHtml } from 'vite-plugin-html'

import gtag from './items/gtag'

export default function viteHtmlPlugin(payload) {
  console.log(payload)
  return injectHtml({
    data: {
      title: 'My Interval Timer',
      gtag: gtag(payload),
    },
  })
}
