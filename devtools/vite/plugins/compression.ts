import viteCompression from 'vite-plugin-compression'

import { PayloadTypes } from '../config'

export default function viteCompressPlugin({}: PayloadTypes) {
  return viteCompression({
    algorithm: 'brotliCompress',
    ext: 'br',
  })
}
