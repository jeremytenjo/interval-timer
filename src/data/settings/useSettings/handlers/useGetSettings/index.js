import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useShowError from '../../../../../lib/components/feedback/useShowError'
import defaultSettings from '../../defaultSettings'
import useData from '../../../../../lib/utils/data/useData'

export default function useGetSettings({ settingsStore }) {
  const fetcher = async () => {
    // TODO fetch settings from firebase
    return true
  }
}
