import { Divider, Layout, ListItem } from '@ui-kitten/components'
import React from 'react'
import { Image, View } from 'react-native'
import { MenuIcon } from '../../assets/icons'
import image from '../../assets/triangulo.png'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import Title from '../../components/Title'
import { Toolbar } from '../../components/Toolbar'
import styles from './styles'
import { ResultsScreenProps } from '../../navigator/home.stack'
import { Routes } from '../../navigator'

const data = [
  { title: 'Elección Delegados/as', description: '13/01/19 - 20/02/19' },
  { title: 'Elección Rector ESI', description: '13/01/19 - 20/03/19' }
]

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const MenuResults = ({ navigation }: ResultsScreenProps) => (
  <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
    <Toolbar
      title="Resultados"
      backIcon={MenuIcon}
      onBackPress={navigation.toggleDrawer}
    />
    <Divider />
    <Layout style={styles.container}>
      <Title title="¿Qué resultados desea conocer?" subtitle="" />
      <View style={styles.spaceList}>
        {data.map((d, idk) => (
          <ListItem
            key={idk}
            title={d.title}
            description={d.description}
            onPress={() =>
              navigation.navigate(Routes.RESULTS, { title: d.title })
            }
            accessory={renderItemAccessory}
            style={styles.listItem}
            titleStyle={styles.titleItem}
            descriptionStyle={styles.descriptionItem}
          />
        ))}
      </View>
    </Layout>
  </SafeAreaLayout>
)

export default MenuResults
