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
import Routes from './routes'
import HomeTabBar from '../screens/Home/TabBar'
import HomeDrawer from '../screens/Home/Drawer'
import VotesNavigator from './votes.stack'
import CensusNavigator from './census.stack'
import ResultsNavigator from './results.stack'

type HomeDrawerNavigatorParams = {
  [Routes.HOME]: undefined
  [Routes.CENSUS]: undefined
  [Routes.VOTES]: undefined
  [Routes.RESULTS]: {
    id: string
  }
  [Routes.MENU_RESULTS]: {
    id: string
  }
  [Routes.CENSUS_RESULTS]: {
    id: string
  }
  [Routes.ELECTION]: {
    id: string
  }
}

type HomeBottomTabsNavigatorParams = {
  [Routes.CENSUS]: undefined
  [Routes.STATISTICS]: undefined
  [Routes.VOTES]: undefined
  [Routes.RESULTS]: {
    id: string
  }
  [Routes.MENU_RESULTS]: {
    id: string
  }
  [Routes.CENSUS_RESULTS]: {
    id: string
  }
  [Routes.ELECTION]: {
    id: string
  }
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

export interface CensusResultsScreenProps {
  navigation: DrawerNavigationProp<
    HomeDrawerNavigatorParams,
    Routes.CENSUS_RESULTS
  >
  route: RouteProp<HomeDrawerNavigatorParams, Routes.CENSUS_RESULTS>
}

export interface CensusScreenProps {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.CENSUS>,
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.CENSUS_RESULTS>
  >
  route: RouteProp<HomeDrawerNavigatorParams, Routes.CENSUS>
}

export interface ParticularElectionScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.ELECTION>
  route: RouteProp<HomeDrawerNavigatorParams, Routes.ELECTION>
}

export interface ResultsScreenProps {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.MENU_RESULTS>,
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.RESULTS>
  >
  route: RouteProp<HomeDrawerNavigatorParams, Routes.MENU_RESULTS>
}

export interface VotesScreenProps {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.VOTES>,
    DrawerNavigationProp<HomeDrawerNavigatorParams, Routes.ELECTION>
  >
  route: RouteProp<HomeDrawerNavigatorParams, Routes.VOTES>
}

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>()
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>()

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={Routes.CENSUS}
      component={CensusNavigator}
      options={{
        title: 'Censo',
        tabBarIcon: props => <Icon name="layers-outline" {...props} />
      }}
    />
    <BottomTab.Screen
      name={Routes.VOTES}
      component={VotesNavigator}
      options={{
        title: 'Votaciones',
        tabBarIcon: props => <Icon name="checkmark-circle-outline" {...props} />
      }}
    />
    <BottomTab.Screen
      name={Routes.MENU_RESULTS}
      component={ResultsNavigator}
      options={{
        title: 'Resultados',
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
