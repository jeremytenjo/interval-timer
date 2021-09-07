import useFirestoreSetDoc from '../../lib/utils/firebase/firestore/useFirestoreSetDoc'

export default function useTimers() {
  const timers = []

  const fsetdoc = useFirestoreSetDoc({
    collection: 'timers',
    doc: 'LA',
    data: {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    },
  })

  useEffect(() => {
    fsetdoc.exec()
  }, [])

  return { data: timers }
}
