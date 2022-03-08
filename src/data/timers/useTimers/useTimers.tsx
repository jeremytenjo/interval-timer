import useFirestore from '@useweb/use-firestore'
import useData from '@useweb/use-data'
import { collection, query, where, getDocs } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import useTimer from '../../../globalState/useTimer/useTimer'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../lib/components/feedback/useShowError'
import gtag from '../../../lib/utils/analytics/gtag'
import useAuth from '../../../globalState/useAuth/useAuth'

import useHandleGet from './handlers/useHandleGet'
import useHandleRemove from './handlers/useHandleRemove'

export default function useTimers({
  onCreate = undefined,
  onGet = undefined,
  onRemove = undefined,
  onUpdate = undefined,
} = {}) {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const handleRemove = useHandleRemove({ timer })
  const firebase = useFirebase()
  const auth = useAuth()

  // TODO replace useFirestore with useData
  const newTimers = useData({
    id: 'timers',
    get: {
      fetcher: async () => {
        const data = []
        const q = query(
          collection(firebase.db, 'timers'),
          where('userId', '==', auth.user.uid),
        )
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        console.log(data)

        return data
      },
    },
  })

  const timers = useFirestore('timers', {
    onGet: (result) => {
      console.log({ result })
      handleGet.setSelectedTimer(result)
      onGet && onGet(result)
    },
    onGetError: (error) => {
      showError.show({
        error,
        message: `Error fetching timer, please try again.`,
      })
    },
    onCreate: (result) => {
      snackbar.show({
        message: `Timer saved`,
      })
      gtag('event', 'timer_created')
      onCreate && onCreate(result)
    },
    onCreateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Creating timer...`,
          severity: 'info',
        })
      }
    },
    onCreateError: (error) => {
      showError.show({
        error,
        message: `Error creating timer, please try again`,
      })
    },
    onUpdate: (result) => {
      snackbar.show({ message: `Timer updated` })
      onUpdate && onUpdate(result)
    },
    onUpdateError: (error) => {
      showError.show({
        error,
        message: `Error updating timer, please try again`,
      })
    },
    onUpdateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Updating timer...`,
          severity: 'info',
        })
      }
    },
    onRemove: (result) => {
      handleRemove.setSelectedTimer(result)
      snackbar.show({ message: `Timer removed` })
      onRemove && onRemove()
    },
    onRemoveError: (error) => {
      showError.show({
        error,
        message: `Error removing timer, please try again`,
      })
    },
    onRemoveLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Removing timer...`,
          severity: 'info',
        })
      }
    },
  })

  return timers
}
