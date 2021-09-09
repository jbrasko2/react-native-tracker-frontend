import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
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
