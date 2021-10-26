import { registerPlugin, WebPlugin } from '@capacitor/core'

export interface Type {
  showTimerNotification(options: {
    value: string
  }): Promise<{ value: string; source: string }>
}

class CapacitorPluginTimerNotification extends WebPlugin {
  async showTimerNotification(props: { value: string }) {
    return {
      source: props.value + ' from the web!',
    }
  }
}

export default registerPlugin<Type>('CapacitorTimerNotification', {
  web: () => new CapacitorPluginTimerNotification(),
})
