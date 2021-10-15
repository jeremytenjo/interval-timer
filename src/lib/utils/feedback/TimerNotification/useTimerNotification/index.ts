import TimerNotification from '../'

type Props = {
  onStop?: () => void
  onStart?: () => void
  onPause?: () => void
}

export default function useTimerNotification(props: Props) {
  const getTime = () => {
    //
  }

  const setTime = async (time: string) => {
    // console.log({ time })
    // get current time of notification
    // send time to native notitivation if it has changed from current
  }

  const showNotification = async () => {
    console.log('showNotification!')
    const res = await TimerNotification.echo('hi')
    alert(res.source)
    // console.log(res)
  }

  const hideNotification = () => {
    console.log('hideNotification!')
  }

  return { getTime, setTime, showNotification, hideNotification }
}
