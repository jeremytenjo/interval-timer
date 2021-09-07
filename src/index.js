import '@capacitor/core'
import ReactDOM from 'react-dom'

import { FirebaseProvider } from './firebase/useFirebase'
import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <FirebaseProvider>
      <Theme>
        <Router />
      </Theme>
    </FirebaseProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
