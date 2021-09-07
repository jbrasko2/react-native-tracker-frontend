import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const signup = dispatch => {
  return ({ email, password }) => {
    // make api request to sign up with email and password

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
  { signin, signin, signup },
  { isSignedIn: false }
)
