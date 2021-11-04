import { registerPlugin, WebPlugin } from '@capacitor/core'

export type updateTimerNotificationTypes = {
  timeRemaining?: string
  workoutType?: string
}
export interface Type {
  updateTimerNotification(options: updateTimerNotificationTypes)
  removeNotification()
  addListener(string, any)
}

class CapacitorPluginTimerNotification extends WebPlugin {
  async updateTimerNotification(props: updateTimerNotificationTypes) {
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
