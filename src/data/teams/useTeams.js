export default function useTeams() {
  const teams = useData(
    ['teams', 'top'],
    firestoreGet(firestore.collection('teams').where('capital', '==', true)),
    { initialData: [] },
  )

  return teams
}
