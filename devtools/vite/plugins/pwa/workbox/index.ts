export default function getWorkbox() {
  return {
    globIgnores: ['*.map*', '*.br*'],
    // for single page apps
    navigateFallback: '/index.html',
    // exclude firebase namespace pages
    navigateFallbackAllowlist: [/^(?!\/__).*/],
  }
}
