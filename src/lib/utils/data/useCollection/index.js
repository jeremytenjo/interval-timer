import useAuth from '../../../../globalState/useAuth'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

export default function useCollection(
  collectionName,
  { showLocalStorageDataIfNoUserSignedIn = true } = {},
) {
  const auth = useAuth()

  const handlerPayload = {
    userId: auth?.user?.uid,
    collectionName,
    showLocalStorageDataIfNoUserSignedIn,
  }

  const get = useGet(handlerPayload)

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload)
  const remove = useRemove(handlerPayload)
  const update = useUpdate(handlerPayload)

  return {
    get,
    update,
    remove,
    create,
  }
}
