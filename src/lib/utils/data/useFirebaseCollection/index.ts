import capitalize from '@useweb/capitalize'

import useAuth from '../../../../globalState/useAuth'
import singularize from '../../string/singularize'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

type options = {
  defaultData?: any
  returnDefaultData?: boolean
  onGet?: (result: any) => void
  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void
  onRemove?: (result: any) => void
  onUpdate?: (result: any) => void
}

export default function useFirebaseCollection(
  collectionName: string,
  {
    defaultData,
    onGet = () => null,
    onCreate = () => null,
    onCreateError = () => null,
    onCreateLoading = () => null,
    onRemove = () => null,
    onUpdate = () => null,
    returnDefaultData,
  }: options,
) {
  const auth = useAuth()

  const handlerPayload: any = {
    userId: auth?.user?.uid,
    collectionName: {
      raw: collectionName,
      singularized: singularize(collectionName),
      capitalized: capitalize(collectionName),
      capitalizedSingularized: capitalize(singularize(collectionName)),
    },
    returnDefaultData,
    defaultData,
    onGet,
    onRemove,
    onUpdate,
  }

  const get = useGet(handlerPayload)

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload, {
    onCreate,
    onCreateError,
    onCreateLoading,
  })
  const update = useUpdate(handlerPayload)
  const remove = useRemove(handlerPayload)

  return {
    get,
    update,
    remove,
    create,
  }
}
