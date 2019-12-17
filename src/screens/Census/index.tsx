import { Divider, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'
import { MenuIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { CensusScreenProps } from '../../navigator/home.stack'

const Census = ({ navigation }: CensusScreenProps) => {
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title="Censo"
        backIcon={MenuIcon}
        onBackPress={navigation.toggleDrawer}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">Census</Text>
      </Layout>
    </SafeAreaLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  safeArea: {
    flex: 1
  }
})

export default Census
