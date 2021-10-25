import { GenerateSWOptions } from 'workbox-build'

export default function getWorkbox(): GenerateSWOptions {
  return {
    // swDest: 'offline-sw',
    globIgnores: ['*.map*', '*.br*'],
    // for single page apps
    navigateFallback: '/index.html',
    // exclude firebase namespace pages
    navigateFallbackAllowlist: [/^(?!\/__).*/],
  }
}
