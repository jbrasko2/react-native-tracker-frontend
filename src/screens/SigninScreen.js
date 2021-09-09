import React, { useState, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In for Tracker'
        submitButtonText='Sign In'
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>
            Dont' have an account? Sign up instead
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  link: {
    color: 'blue',
  },
})

export default SigninScreen
