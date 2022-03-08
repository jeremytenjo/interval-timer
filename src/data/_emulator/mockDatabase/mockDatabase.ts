import users from '../../users/users.stubs.js'

// used by src/services/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData.ts
export default [
  {
    name: 'users',
    data: users,
  },
  // TODO add timers collection
  {
    name: 'timers',
    data: [
      {
        id: 'aOFUmKeILruty79acGAK',
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
