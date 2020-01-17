import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './routes'
import Election from '../screens/Election'
import ParticularElection from '../screens/Election/ParticularElection'
import ParticularPoll from '../screens/Election/ParticularPoll'

const Stack = createStackNavigator()

const VotesNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={Routes.VOTES}>
    <Stack.Screen name={Routes.VOTES} component={Election} />
    <Stack.Screen name={Routes.ELECTION} component={ParticularElection} />
    <Stack.Screen name={Routes.POLL} component={ParticularPoll} />
  </Stack.Navigator>
)

export default VotesNavigator
