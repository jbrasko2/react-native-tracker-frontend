import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage, tryLocalSignin } =
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
        headerText='Sign In for Tracker'
        submitButtonText='Sign In'
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        routeName='Signup'
        linkText="Don't have an account? Sign up instead"
      />
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
