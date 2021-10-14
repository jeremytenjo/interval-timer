import manifestJson from 'rollup-plugin-manifest-json'

import { PayloadTypes } from '../config'

// https://github.com/azerella/rollup-plugin-manifest-json
export default function vitemMnifestJsonPlugin({ appConfig }: PayloadTypes) {
  return manifestJson({
    input: 'public/manifest.json', // Required
    manifest: appConfig.manifestJson,
  })
}
