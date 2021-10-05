import useOnTrue from '@useweb/use-on-true'
import useAsync from '@useweb/use-async'

import useShowError from '../../../components/feedback/useShowError'
import useLocalStorage from '../../storage/useLocalStorage'

export default function useGetData({
  userId,
  firestoreFetcher,
  key,
  updateData,
  firestoreCalled,
  setFirestoreCalled,
  localStorageCalled,
  setLocalStorageCalled,
}) {
  const getLocalData = useLocalStorage({ action: 'get', key })
  const getFierstoreData = useAsync(firestoreFetcher)

  useShowError(
    getLocalData.error || getFierstoreData.error,
    `Error getting ${key}, please try again.`,
  )

  // Local Storage
  useOnTrue(userId && !localStorageCalled && !firestoreCalled, () => {
    getLocalData.exec()
    setLocalStorageCalled(true)
  })

  useOnTrue(getLocalData.result, () => {
    updateData(getLocalData.result)
  })

  // Firestore Storage
  useOnTrue(userId && !firestoreCalled, () => {
    getFierstoreData.exec()
    setFirestoreCalled(true)
  })

  useOnTrue(getFierstoreData.result, () => {
    updateData(getFierstoreData.result)
  })
}
