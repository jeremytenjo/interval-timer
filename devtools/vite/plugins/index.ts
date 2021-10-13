export default async function getVitePlugins() {
  return [
    await (await import('./react')).default(),
    await (await import('./compression')).default(),
  ]
}
