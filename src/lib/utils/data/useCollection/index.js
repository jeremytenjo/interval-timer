import capitalize from '@useweb/capitalize'

import useAuth from '../../../../globalState/useAuth'
import singularize from '../../string/singularize'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

export default function useCollection(
  collectionName,
  { showLocalStorageDataIfNoUserSignedIn = true, defaultData } = {},
) {
  const auth = useAuth()

  const handlerPayload = {
    userId: auth?.user?.uid,
    collectionName: {
      raw: collectionName,
      singularized: singularize(collectionName),
      capitalized: capitalize(collectionName),
      capitalizedSingularized: capitalize(singularize(collectionName)),
    },
    showLocalStorageDataIfNoUserSignedIn,
    defaultData,
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
