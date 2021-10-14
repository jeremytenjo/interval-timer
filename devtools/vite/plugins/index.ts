export default async function getVitePlugins(payload) {
  return [
    await (await import('./react')).default(payload),
    await (await import('./html')).default(payload),
    await (await import('./compression')).default(payload),
  ]
}
