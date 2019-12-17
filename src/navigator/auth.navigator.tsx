/* eslint-disable no-nested-ternary */
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useAuth } from '../context/auth'
import { Welcome } from '../screens'
import Login from '../screens/Login'
import { HomeNavigator } from './home.stack'
import Routes from './routes'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  const { isLoading, isTokenValid } = useAuth()

  return (
    <Stack.Navigator headerMode="none">
      {isLoading ? (
        <Stack.Screen name={Routes.WELCOME} component={Welcome} />
      ) : isTokenValid ? (
        <Stack.Screen name={Routes.HOME} component={HomeNavigator} />
      ) : (
        <Stack.Screen name={Routes.LOGIN} component={Login} />
      )}
    </Stack.Navigator>
  )
}

export default AuthNavigator
