import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import HomeNavigator from './home.stack'

const Stack = createStackNavigator()

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.HOME} component={HomeNavigator} />
  </Stack.Navigator>
)

export default AppStack
