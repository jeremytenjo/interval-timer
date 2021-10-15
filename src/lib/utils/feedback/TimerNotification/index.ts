// https://capacitorjs.com/docs/plugins/android
// https://capacitorjs.com/docs/plugins/ios
import { WebPlugin, registerPlugin } from '@capacitor/core'

class CapacitorPluginTimerNotification extends WebPlugin {
  async echo(value: string) {
    return {
      value,
      source: 'hello from the web!',
    }
  }
}

//android file android/app/src/main/java/app/capacitorstarter/app/plugins/CapacitorPluginTimerNotification.kt
//ios ios/App/App/plugins/CapacitorPluginTimerNotification/CapacitorPluginTimerNotification.swift
export default registerPlugin<any>('TimerNotification', {
  web: () => new CapacitorPluginTimerNotification(),
})
