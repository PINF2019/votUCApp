import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import Welcome from '../screens/Welcome'

const Stack = createStackNavigator()

const WelcomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.WELCOME} component={Welcome} />
  </Stack.Navigator>
)

export default WelcomeStack
