import { Divider, ListItem, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MenuIcon } from '../../assets/icons'
// import styles from './styles'
import image from '../../assets/triangulo.png'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { Routes } from '../../navigator'
import { VotesScreenProps } from '../../navigator/home.stack'

const title = 'Elección Delegados/as'
const date = '13/11/19 - 20/11/19'
const electors = [
  { name: 'Raúl Escribano Corrales' },
  { name: 'Borja Romero Fernández' },
  { name: 'Antonio José Sánchez Muñoz' }
]

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const data = [
  { title: 'Elección Delegados/as', date: '13/01/19 - 20/02/19' },
  { title: 'Elección Rector ESI', date: '13/01/19 - 20/03/19' }
]
const listColor = '#F0F0F0'
const color = '#345B96'
const styles = StyleSheet.create({
  areaLayout: { flex: 1 },
  container: {
    alignItems: 'center',
    marginBottom: 10
  },
  descriptionItem: { color },
  image: {
    height: 25,
    width: 25
  },
  listItem: {
    alignSelf: 'center',
    backgroundColor: listColor,
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    width: '85%'
  },
  spaceList: {
    flex: 24
  },
  title: {
    color,
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: '5%',
    paddingTop: '8%'
  },
  titleItem: { color, fontSize: 15, fontWeight: 'bold' }
})

const Votes = ({ navigation }: VotesScreenProps) => {
  return (
    <SafeAreaLayout style={styles.areaLayout} insets={SaveAreaInset.TOP}>
      <Toolbar
        title="Votaciones"
        backIcon={MenuIcon}
        onBackPress={navigation.toggleDrawer}
      />
      <Divider />
      <View style={styles.container}>
        <Text style={styles.title}>VOTACIONES PENDIENTES</Text>
      </View>

      <View style={styles.spaceList}>
        {data.map((d, idk) => (
          <ListItem
            key={idk}
            title={`${d.title}`}
            description={`${d.date}`}
            onPress={() => {
              navigation.navigate(Routes.ELECTION, {
                title: d.title,
                date: d.date,
                data: electors
              })
            }}
            accessory={renderItemAccessory}
            style={styles.listItem}
            titleStyle={styles.titleItem}
            descriptionStyle={styles.descriptionItem}
          />
        ))}
      </View>
    </SafeAreaLayout>
  )
}

export default Votes
