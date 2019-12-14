import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@ui-kitten/components'
import React from 'react'
import { Census, Results, Statistics } from '../screens'
import Routes from './routes'

const BottomTab = createBottomTabNavigator()

const HomeNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name={Routes.CENSUS}
      component={Census}
      options={{
        title: 'Censo',
        tabBarIcon: () => <Icon name="layers-outline" />
      }}
    />
    <BottomTab.Screen
      name={Routes.RESULTS}
      component={Results}
      options={{
        title: 'Resultados',
        tabBarIcon: () => <Icon name="checkmark-circle-outline" />
      }}
    />
    <BottomTab.Screen
      name={Routes.STATISTICS}
      component={Statistics}
      options={{
        title: 'Estadisticas',
        tabBarIcon: () => <Icon name="pie-chart-2" />
      }}
    />
  </BottomTab.Navigator>
)

export default HomeNavigator
