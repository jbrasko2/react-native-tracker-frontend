import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, routeName, linkText }) => {
  return (
    <>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
          <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
})

export default withNavigation(NavLink)
