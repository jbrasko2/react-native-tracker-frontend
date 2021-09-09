import { NavigationActions } from 'react-navigation'

let navigator

export const setNavigator = nav => {
  navigator = nav
}

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

// this allows us to access navigation from outside of a React component (e.g. AuthContext)