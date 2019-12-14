import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import AuthNavigator from './auth.stack'
import WelcomeNavigator from './welcome.stack'

const Stack = createStackNavigator()

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.WELCOME} component={WelcomeNavigator} />
    <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
  </Stack.Navigator>
)

export default AppStack
