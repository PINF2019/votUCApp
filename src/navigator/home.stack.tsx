/* eslint-disable @typescript-eslint/ban-ts-ignore */
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabNavigationProp
} from '@react-navigation/bottom-tabs'
import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
  createDrawerNavigator
} from '@react-navigation/drawer'
import React from 'react'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { Icon } from '@ui-kitten/components'
import { Census, Results, Statistics } from '../screens'
import Routes from './routes'
import HomeTabBar from '../screens/Home/TabBar'
import HomeDrawer from '../screens/Home/Drawer'

type HomeDrawerNavigatorParams = {
  [Routes.HOME]: undefined
  [Routes.CENSUS]: undefined
}

type HomeBottomTabsNavigatorParams = {
  [Routes.CENSUS]: undefined
  [Routes.RESULTS]: undefined
  [Routes.STATISTICS]: undefined
}

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, Routes.CENSUS>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.HOME>
>

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp
}

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.HOME>
}

export interface CensusScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.CENSUS>
  route: RouteProp<HomeDrawerNavigatorParams, Routes.CENSUS>
}

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>()
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>()

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={Routes.CENSUS}
      component={Census}
      options={{
        title: 'Censo',
        tabBarIcon: props => <Icon name="layers-outline" {...props} />
      }}
    />
    <BottomTab.Screen
      name={Routes.RESULTS}
      component={Results}
      options={{
        title: 'Resultados',
        tabBarIcon: props => <Icon name="checkmark-circle-outline" {...props} />
      }}
    />
    <BottomTab.Screen
      name={Routes.STATISTICS}
      component={Statistics}
      options={{
        title: 'Estadisticas',
        tabBarIcon: props => <Icon name="pie-chart-2" {...props} />
      }}
    />
  </BottomTab.Navigator>
)

export const HomeNavigator = (): React.ReactElement => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={Routes.HOME}
      component={HomeBottomNavigator}
      options={{
        title: 'Home',
        drawerIcon: props => <Icon name="home-outline" {...props} />
      }}
    />
  </Drawer.Navigator>
)
