import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import AuthNavigator from './auth.navigator'

const Stack = createStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
  </Stack.Navigator>
)

export default AppNavigator
