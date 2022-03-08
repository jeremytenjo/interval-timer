import { VitePWA } from 'vite-plugin-pwa'

import { PayloadTypes } from '../../vite'

import getManifest from './manifest/manifest'
import getWorkbox from './workbox/workbox'
// import getIncludeAssets from './includeAssets'

// https://vite-plugin-pwa.netlify.app/guide/generate.html
export default function vitePWAPlugin({ appConfig, isProdMode }: PayloadTypes) {
  return isProdMode
    ? VitePWA({
        // includeAssets: getIncludeAssets(),
        manifest: getManifest({ manifestJson: appConfig.manifestJson }),
        strategies: 'generateSW',
        workbox: getWorkbox(),
      })
    : () => null
}