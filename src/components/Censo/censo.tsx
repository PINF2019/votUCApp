import React, { useState } from 'react'
import { Alert, Image, StyleSheet, View, Text } from 'react-native'
import { List, ListItem } from 'react-native-ui-kitten'
import Styles from './style'

const renderItemAccessory = () => (
  <Image
    source={require('../../assets/triangulo.png')}
    style={{ width: 25, height: 25 }}
  />
)

const RenderItem = ({ item }) => {
  return (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      onPress={() => Alert.alert(`Button for ${item.title}`)}
      accessory={renderItemAccessory}
      style={Styles.listItem}
      titleStyle={Styles.titleItem}
      descriptionStyle={Styles.descriptionItem}
    />
  )
}

const Censo = ({ title, data }) => (
  <>
    <View style={Styles.titleView}>
      <Text style={Styles.palito}>|</Text>
      <Text style={Styles.title}>{title}</Text>
    </View>
    <View style={Styles.spaceList}>
      <List data={data} renderItem={RenderItem} />
    </View>
  </>
)

export default Censo
