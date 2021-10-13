import viteCompression from 'vite-plugin-compression'

export default function viteCompressPlugin() {
  return viteCompression({
    algorithm: 'brotliCompress',
    ext: 'br',
  })
}
