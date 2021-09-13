import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {}}
        onDidFocus={() => {}}
        onWillBlur={clearErrorMessage}
        onDidBlur={() => {}}
      />
      <AuthForm
        headerText='Sign Up for Tracker'
        submitButtonText='Sign Up'
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        routeName='Signin'
        linkText='Already have an account? Sign in instead'
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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
})

export default SignupScreen
