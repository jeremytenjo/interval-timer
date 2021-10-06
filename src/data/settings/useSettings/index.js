import useCollection from '../../../lib/utils/data/useCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  // TODO
  const collection = useCollection('settings')

  return collection
}
