import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = dispatch => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    try {
      const response = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      })
    }
    // if we sign up, modify state, say we are authenticated

    // if signing up fails, reflect error message
  }
}

const signin = dispatch => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success by updating state
    // Handle failure by showing error message
  }
}

const signout = dispatch => {
  return () => {
    // Somehow sign out
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
)
