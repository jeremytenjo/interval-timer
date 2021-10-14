import capitalize from '@useweb/capitalize'

import useAuth from '../../../../globalState/useAuth'
import singularize from '../../string/singularize'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

type options = {
  showLocalStorageDataIfNoUserSignedIn: boolean
  defaultData: string
  onGet: string
  onCreate: string
  onRemove: string
  onUpdate: string
}

export default function useCollection(
  collectionName: string,
  {
    showLocalStorageDataIfNoUserSignedIn = true,
    defaultData,
    onGet,
    onCreate,
    onRemove,
    onUpdate,
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
    showLocalStorageDataIfNoUserSignedIn,
    defaultData,
    onGet,
    onCreate,
    onRemove,
    onUpdate,
  }

  const get = useGet(handlerPayload)

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload)
  const update = useUpdate(handlerPayload)
  const remove = useRemove(handlerPayload)

  return {
    get,
    update,
    remove,
    create,
  }
}
