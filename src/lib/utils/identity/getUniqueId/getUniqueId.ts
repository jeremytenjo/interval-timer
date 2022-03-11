export default function getUniqueId() {
  const uniqueId = Math.floor(Date.now() + Math.random())
  return uniqueId
}
