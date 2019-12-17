import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Census } from '../screens'
import CensusResults from '../screens/Census/CensusResults'
import Routes from './routes'

const Stack = createStackNavigator()

const CensusNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={Routes.CENSUS}>
    <Stack.Screen name={Routes.CENSUS} component={Census} />
    <Stack.Screen name={Routes.CENSUS_RESULTS} component={CensusResults} />
  </Stack.Navigator>
)

export default CensusNavigator
