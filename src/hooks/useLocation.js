import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distance: 10,
        },
        callback
      )
      setSubscriber(sub)

      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else {
      subscriber.remove()
      setSubscriber(null)
    }

    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err]
}
