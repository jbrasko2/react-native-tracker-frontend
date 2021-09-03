import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title='Go to Signin'
        onPress={() => {
          navigation.navigate('Signin')
        }}
      />
      <Button
        title='Go to Main Flow'
        onPress={() => {
          navigation.navigate('mainFlow')
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default SignupScreen
