import { registerPlugin, WebPlugin } from '@capacitor/core'

export type showTimerNotificationTypes = {
  timeRemaining?: string
  workoutType?: string
  remove?: boolean
}
export interface Type {
  showTimerNotification(options: showTimerNotificationTypes)
  removeNotification()
  addListener(string, any)
}

class CapacitorPluginTimerNotification extends WebPlugin {
  async showTimerNotification(props: showTimerNotificationTypes) {
    return {
      source: props.timeRemaining + ' from the web!',
    }
  }

  async removeNotification() {
    return null
  }
}

export default registerPlugin<Type>('CapacitorTimerNotification', {
  web: () => new CapacitorPluginTimerNotification(),
})
