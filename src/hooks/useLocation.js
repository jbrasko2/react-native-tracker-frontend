import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'

export default callback => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distance: 10,
        },
        callback
      )

      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return [err]
}
