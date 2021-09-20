import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
          <Button title='Sign Out' onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <Ionicons name='settings-outline' size={24} color='black' />,
}

const styles = StyleSheet.create({})

export default AccountScreen
