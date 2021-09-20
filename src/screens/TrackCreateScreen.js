import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { AntDesign } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)
  const callback = useCallback(
    location => addLocation(location, recording),
    [recording]
  )
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <AntDesign name='pluscircleo' size={20} color='black' />,
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
