import React, { useState } from 'react'
import { Alert, Image, View, Text } from 'react-native'
import { List, ListItem } from '@ui-kitten/components'
import styles from './styles'
import image from '../../assets/triangulo.png'

export type CensoProps = {
  item: any
}

const data = [
  { title: 'Elección Delegados/as', description: '13/01/19 - 20/02/19' },
  { title: 'Elección Rector ESI', description: '13/01/19 - 20/03/19' }
]

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const RenderItem = ({ item }) => {
  return (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      onPress={() => Alert.alert(`Button for ${item.title}`)}
      accessory={renderItemAccessory}
      style={styles.listItem}
      titleStyle={styles.titleItem}
      descriptionStyle={styles.descriptionItem}
    />
  )
}

const Resultados = () => (
  <>
    <View style={styles.titleView}>
      <Text style={styles.palito}>|</Text>
      <Text style={styles.title}>¿Qué resultados desea conocer?</Text>
    </View>
    <View style={styles.spaceList}>
      <List data={data} renderItem={RenderItem} />
    </View>
  </>
)

export default Resultados
