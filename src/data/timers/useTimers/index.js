import useCollection from '../../../lib/utils/data/useCollection'

export default function useTimers() {
  const collection = useCollection('timers')

  return collection
}
