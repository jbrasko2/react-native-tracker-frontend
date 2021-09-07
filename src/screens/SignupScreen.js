import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for Tracker</Text>
      <Input label='Email' />
      <Input label='Password' />
      <Button title='Sign Up' />
    </>
  )
}

const styles = StyleSheet.create({})

export default SignupScreen
