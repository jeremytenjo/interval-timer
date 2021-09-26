import { Storage } from '@capacitor/storage'
import useAsync from '@useweb/use-async'

export default function useLocalStorage({ action = 'get', key } = {}) {
  return useAsync(async (data) => {
    if (action === 'get') {
      const { value } = await Storage.get({ key })
      const valueParsed = JSON.parse(value)

      return valueParsed
    }

    if (action === 'set') {
      const valueStringifyed = JSON.stringify(data.value)

      await Storage.set({ key: data.key, value: valueStringifyed })
    }

    if (action === 'remove') {
      await Storage.remove({ key })
    }
  })
}
