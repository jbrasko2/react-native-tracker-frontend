import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-native-safe-area-context'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create A Track</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
