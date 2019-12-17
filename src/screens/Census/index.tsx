import { Divider, Layout, ListItem } from '@ui-kitten/components'
import React from 'react'
import { Alert, Image, View } from 'react-native'
import { MenuIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { CensusScreenProps } from '../../navigator/home.stack'
import Title from '../../components/Title'
import styles from './style'
import image from '../../assets/triangulo.png'

export type CensoProps = {
  title: string
  description: string
}

const data = [
  { title: 'Elección Delegados/as', description: '13/01/19 - 20/02/19' },
  { title: 'Elección Rector ESI', description: '13/01/19 - 20/03/19' }
]

const renderItemAccessory = () => <Image source={image} style={styles.image} />

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
        <Title title="¿Qué censo desea conocer?" subtitle="" />
        <View style={styles.spaceList}>
          {data.map((d, idk) => (
            <ListItem
              key={idk}
              title={d.title}
              description={d.description}
              onPress={() => Alert.alert(`Button for ${d.title}`)}
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
}

export default Census
