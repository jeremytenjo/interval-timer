import { injectHtml } from 'vite-plugin-html'

export default function viteHtmlPlugin() {
  return injectHtml({
    data: {
      title: 'My Interval Timer',
      injectScript: '<script src="./inject.js"></script>',
    },
  })
}
