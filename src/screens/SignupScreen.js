import React, { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        submitButtonText='Sign Up'
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </TouchableOpacity>
      </Spacer>
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
  link: {
    color: 'blue',
  },
})

export default SignupScreen
