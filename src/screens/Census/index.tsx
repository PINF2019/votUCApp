import { Divider, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'
import { MenuIcon } from '../../assets/icons'
import Censo from '../../components/Censo/censo'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { CensusScreenProps } from '../../navigator/home.stack'

const data = [
  { title: 'lalalasdasal', description: 'lalalla' },
  { title: 'lalaasdaslal', description: 'lalaasdassdlla' }
]

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
        <Censo title="¿Que censo desea conocer?" data={data} />
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
