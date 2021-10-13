import { WebPlugin, registerPlugin } from '@capacitor/core'

class FirebaseAuthWeb extends WebPlugin {
  async echo(value) {
    return {
      value,
      source: 'hello web',
    }
  }
}

export default registerPlugin('FirebaseAuth', {
  web: () => new FirebaseAuthWeb(),
})
