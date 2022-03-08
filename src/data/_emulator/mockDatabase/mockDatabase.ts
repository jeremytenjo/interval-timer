import type { CollectionType } from '../../../lib/utils/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData'

// used by src/services/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData.ts
const mockDatabase: CollectionType[] = [
  // TODO add timers collection
  {
    name: 'timers',
    setUserIdToDataFromSignedInUser: true,
    data: [
      {
        name: 'Upper Body',
        repetitions: 12,
        rest: 55,
        sets: 3,
        workout: 50,
        timestamp: {
          nanoseconds: 193000000,
          seconds: 1638544239,
        },
      },
    ],
  },
]

export default mockDatabase
