import { List, ListItem } from '@ui-kitten/components'
import React from 'react'
import { Alert, Image, View } from 'react-native'
import image from '../../assets/triangulo.png'
import Title from '../Title'
import styles from './style'

export type CensoProps = {
  title: string
  data: any
}

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const RenderItem = ({ item: { title, description } }) => (
  <ListItem
    title="sasfdfss"
    description={description}
    onPress={() => Alert.alert(`Button for ${title}`)}
    accessory={renderItemAccessory}
    style={styles.listItem}
    titleStyle={styles.titleItem}
    descriptionStyle={styles.descriptionItem}
  />
)

const Censo = ({ title, data }: CensoProps) => (
  <>
    <Title title={title} subtitle="" />
    <View style={styles.spaceList}>
      <List data={data} renderItem={RenderItem} />
    </View>
  </>
)

export default Censo
