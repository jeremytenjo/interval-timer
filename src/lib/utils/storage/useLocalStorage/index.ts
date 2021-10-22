import { Storage } from '@capacitor/storage'
import useAsync from '@useweb/use-async'

type Props = {
  action: 'get' | 'set' | 'remove'
  key: string
  onResult?: any
}

/**
 * [Docs](https://capacitorjs.com/docs/apis/storage)
 *
 * @example
 * const getLocalTimers = useLocalStorage({ action: 'get', key: 'timers' })
 *
 * const setLocalTimers = useLocalStorage({ action: 'set', key: 'timers' })
 * setLocalTimers({key: 'timers', value: data})
 */
export default function useLocalStorage({ action = 'get', key, onResult }: Props) {
  const fetcher = async (data) => {
    if (action === 'get') {
      const { value } = await Storage.get({ key })
      const valueParsed = JSON.parse(value)

      return valueParsed
    }

    if (action === 'set') {
      const valueStringifyed = JSON.stringify(data.value)

      await Storage.set({ key: key || data.key, value: valueStringifyed })
    }

    if (action === 'remove') {
      await Storage.remove({ key })
    }
  }

  const localStorage = useAsync(fetcher, {
    onResult: (result) => {
      onResult && onResult(result)
    },
  })

  return localStorage
}
