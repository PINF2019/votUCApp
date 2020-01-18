/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-self-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  DrawerElement,
  MenuItemType,
  Layout
} from '@ui-kitten/components'
import React from 'react'
import { ImageBackgroundProps, StyleSheet, View } from 'react-native'
import LogOut from '../../components/Logout'
import { DrawerHomeScreenProps } from '../../navigator/home.stack'

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <Layout style={styles.header} />
)

const HomeDrawer = ({
  state,
  navigation,
  descriptors
}: DrawerHomeScreenProps): DrawerElement => {
  const onMenuItemSelect = (index: number): void => {
    const selectedTabRoute: string = state.routeNames[index]
    navigation.navigate(selectedTabRoute)
    navigation.closeDrawer()
  }

  const createNavigationItemForRoute = (route: any): MenuItemType => {
    const { options } = descriptors[route.key]
    return {
      routeName: route.name,
      title: options.title as string,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      icon: options.drawerIcon
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Drawer
        header={DrawerHeader}
        data={state.routes.map(createNavigationItemForRoute)}
        onSelect={onMenuItemSelect}
      />
      <LogOut />
    </View>
  )
}

export default HomeDrawer

const styles = StyleSheet.create({
  header: {
    height: 50
  }
})
