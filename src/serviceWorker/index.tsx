// import { useRegisterSW } from 'virtual:pwa-register/react'

export default function ServiceWorker({ children }) {
  //   const {
  //     offlineReady: [offlineReady, setOfflineReady],
  //     needRefresh: [needRefresh, setNeedRefresh],
  //     updateServiceWorker,
  //   } = useRegisterSW({
  //     onRegistered(r) {
  //       // eslint-disable-next-line prefer-template
  //       console.log('SW Registered: ' + r)
  //     },
  //     onRegisterError(error) {
  //       console.log('SW registration error', error)
  //     },
  //   })

  return children
}
