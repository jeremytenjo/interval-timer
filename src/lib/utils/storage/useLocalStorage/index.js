import { Storage } from '@capacitor/storage'
import useAsync from '@useweb/use-async'

/**
 * Actions: get | set | remove
 *
 * [Docs](https://capacitorjs.com/docs/apis/storage)
 *
 * @example
 * const getLocalTimers = useLocalStorage({ action: 'get', key: 'timers' })
 */
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
