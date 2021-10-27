import { registerPlugin, WebPlugin } from '@capacitor/core'

export type showTimerNotificationTypes = {
  timeRemaining?: string
  workoutType?: string
  remove?: boolean
}
export interface Type {
  showTimerNotification(options: showTimerNotificationTypes)
}

class CapacitorPluginTimerNotification extends WebPlugin {
  async showTimerNotification(props: showTimerNotificationTypes) {
    return {
      source: props.timeRemaining + ' from the web!',
    }
  }
}

export default registerPlugin<Type>('CapacitorTimerNotification', {
  web: () => new CapacitorPluginTimerNotification(),
})
