import '@capacitor/core'
import ReactDOM from 'react-dom'

import { FirebaseProvider } from './firebase/useFirebase'
import Router from './pages/router'
import Theme from './theme/theme'
import DataProvider from './lib/utils/data/useData/DataProvider'

function App() {
  return (
    <FirebaseProvider>
      <Theme>
        <DataProvider>
          <Router />
        </DataProvider>
      </Theme>
    </FirebaseProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
