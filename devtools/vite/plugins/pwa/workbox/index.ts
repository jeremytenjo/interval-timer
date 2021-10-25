import { GenerateSWOptions } from 'workbox-build'

export default function getWorkbox(): GenerateSWOptions {
  return {
    swDest: 'build/sw',
    globIgnores: ['*.map*', '*.br*'],
    // for single page apps
    navigateFallback: '/index.html',
    // exclude firebase namespace pages
    navigateFallbackAllowlist: [/^(?!\/__).*/],
  }
}
