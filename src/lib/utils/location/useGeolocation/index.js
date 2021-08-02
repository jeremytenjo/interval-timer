import { Geolocation } from '@capacitor/geolocation'

export default function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState(null)
  const [permission, setPermission] = useState(null)

  const getCurrentPosition = async () => {
    const currentPosition = await Geolocation.getCurrentPosition()
    setCurrentPosition(currentPosition)
  }

  const requestPermissions = async () => {
    const permission = await Geolocation.requestPermissions()
    setPermission(permission)
  }

  return { getCurrentPosition, currentPosition, requestPermissions, permission }
}
