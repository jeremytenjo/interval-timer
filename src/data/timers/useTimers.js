export default function useTimers() {
  const timers = useData(
    ['timers', 'timerId'],
    firestoreGet(firestore.collection('timers').where('capital', '==', true)),
    { initialData: [] },
  )

  return timers
}
