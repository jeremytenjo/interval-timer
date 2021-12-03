import useAuth from '../../../../globalState/useAuth'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

type options = {
  defaultData?: any
  returnDefaultData?: boolean

  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  onGetLoading?: (loading: boolean) => void

  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void

  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void

  onUpdate?: (result: any) => void
  onUpdateError?: (error: any) => void
  onUpdateLoading?: (loading: boolean) => void
}

export default function useFirebaseCollection(
  collectionName: string,
  {
    defaultData,
    onGet = () => null,
    onGetError = () => null,
    onGetLoading = () => null,
    onCreate = () => null,
    onCreateError = () => null,
    onCreateLoading = () => null,
    onRemove = () => null,
    onRemoveError = () => null,
    onRemoveLoading = () => null,
    onUpdate = () => null,
    onUpdateError = () => null,
    onUpdateLoading = () => null,
    returnDefaultData,
  }: options,
) {
  const auth = useAuth()

  const handlerPayload: any = {
    userId: auth?.user?.uid,
    collectionName,
    returnDefaultData,
    defaultData,
  }

  const get = useGet(handlerPayload, {
    onGet,
    onGetError,
    onGetLoading,
  })

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload, {
    onCreate,
    onCreateError,
    onCreateLoading,
  })

  const update = useUpdate(handlerPayload, {
    onUpdate,
    onUpdateError,
    onUpdateLoading,
  })

  const remove = useRemove(handlerPayload, {
    onRemove,
    onRemoveError,
    onRemoveLoading,
  })

  return {
    get,
    update,
    remove,
    create,
  }
}
