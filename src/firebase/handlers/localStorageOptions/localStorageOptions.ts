import { Storage } from '@capacitor/storage'
import type { LocalStorageOptionsTypes } from '@useweb/use-firebase'

export default {
  getterFunction: async ({ key }) => {
    const { value } = await Storage.get({ key })
    return value
  },
  setterFunction: async ({ key, data }) => {
    await Storage.set({ key, value: data })
  },
  removeFunction: async ({ key }) => {
    await Storage.remove({ key })
  },
} as LocalStorageOptionsTypes
