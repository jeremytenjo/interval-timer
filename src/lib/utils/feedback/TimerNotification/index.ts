import { registerPlugin, WebPlugin } from '@capacitor/core'

export interface Type {
  echo(options: { value: string }): Promise<{ value: string; source: string }>
}

class CapacitorPluginTimerNotification extends WebPlugin {
  async echo(props: { value: string }) {
    return {
      source: props.value + ' from the web!',
    }
  }
}

const Echo = registerPlugin<Type>('CapacitorTimerNotification', {
  web: () => new CapacitorPluginTimerNotification(),
})

export default Echo
