/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  BottomNavigationTabElement,
  Divider
} from '@ui-kitten/components'
import {
  SafeAreaLayout,
  SaveAreaInset,
  SafeAreaLayoutElement
} from '../../components/safe-area-layout'
import { BottomHomeScreenProps } from '../../navigator/home.stack'

const HomeTabBar = ({
  state,
  navigation,
  descriptors
}: BottomHomeScreenProps): SafeAreaLayoutElement => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = state.routeNames[index]
    navigation.navigate(selectedTabRoute)
  }

  const createNavigationTabForRoute = (
    route: any
  ): BottomNavigationTabElement => {
    const { options } = descriptors[route.key]
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        // @ts-ignore
        icon={options.tabBarIcon}
      />
    )
  }

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={onSelect}>
        {state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </SafeAreaLayout>
  )
}

export default HomeTabBar
