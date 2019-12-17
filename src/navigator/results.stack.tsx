import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Routes from './routes'
import MenuResults from '../screens/MenuResults/MenuResults'
import Results from '../screens/MenuResults/Results'

const Stack = createStackNavigator()

const ResultsNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={Routes.MENU_RESULTS}>
    <Stack.Screen name={Routes.MENU_RESULTS} component={MenuResults} />
    <Stack.Screen name={Routes.RESULTS} component={Results} />
  </Stack.Navigator>
)

export default ResultsNavigator
