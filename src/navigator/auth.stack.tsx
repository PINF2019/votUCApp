import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import Login from '../screens/Login'
import HomeNavigator from './home.stack'
import { isAuthTokenValid, getAuthToken } from '../utils/auth'

const Stack = createStackNavigator()
// FIXME : made this async
const AuthStack = () => {
  const isAuth = isAuthTokenValid()
  return (
    <Stack.Navigator headerMode="none">
      {isAuth ? (
        <Stack.Screen name={Routes.HOME} component={HomeNavigator} />
      ) : (
        <Stack.Screen name={Routes.LOGIN} component={Login} />
      )}
    </Stack.Navigator>
  )
}

export default AuthStack
