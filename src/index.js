import '@capacitor/core'
import ReactDOM from 'react-dom'

import './firebase/initializeFirebase'
import Router from './pages/router'
import Theme from './theme/theme'
import DataProvider from './lib/utils/useData/DataProvider'

function App() {
  return (
    <Theme>
      <DataProvider>
        <Router />
      </DataProvider>
    </Theme>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
