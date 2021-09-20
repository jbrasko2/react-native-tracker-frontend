import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext)

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter Track Name'
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title='Save Recording' />
        </Spacer>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({})

export default TrackForm
