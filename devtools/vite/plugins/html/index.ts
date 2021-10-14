import { injectHtml } from 'vite-plugin-html'

import { PayloadTypes } from '../../config'

import gtag from './items/gtag'

// https://github.com/anncwb/vite-plugin-html
export default function viteHtmlPlugin(payload: PayloadTypes) {
  return injectHtml({
    data: {
      title: payload.appConfig.manifestJson.name,
      gtag: gtag(payload),
    },
  })
}
