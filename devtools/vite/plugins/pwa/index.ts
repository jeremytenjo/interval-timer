import { VitePWA } from 'vite-plugin-pwa'

import { PayloadTypes } from '../../config'

import getManifest from './manifest'

// https://vite-plugin-pwa.netlify.app/guide/generate.html
export default function vitePWAPlugin({ appConfig, mode }: PayloadTypes) {
  console.log(mode)
  return VitePWA({
    manifest: getManifest({ manifestJson: appConfig.manifestJson }),
  })
}
