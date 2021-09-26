import { Storage } from '@capacitor/storage'
import useAsync from '@useweb/use-async'

export default function useLocalStorage({ key } = {}) {
  const get = useAsync(async () => {
    const { value } = await Storage.get({ key })
    const valueParsed = JSON.parse(value)

    return valueParsed
  })

  const set = useAsync(async (data) => {
    const valueStringifyed = JSON.stringify(data.value)

    await Storage.set({ key: data.key, value: valueStringifyed })
  })

  const remove = useAsync(async () => {
    await Storage.remove({ key })
  })

  return { get, set, remove }
}
