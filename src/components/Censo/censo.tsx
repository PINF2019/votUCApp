import React, { useState } from 'react'
import { Alert, Image, StyleSheet, View, Text } from 'react-native'
import { List, ListItem } from 'react-native-ui-kitten'

const renderItemAccessory = () => (
  <Image
    source={require('./triangulo.png')}
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
      style={styles.listItem}
      titleStyle={styles.titleItem}
      descriptionStyle={styles.descriptionItem}
    />
  )
}

const Censo = ({ title, data }) => (
  <>
    <View style={styles.titleView}>
      <Text style={styles.palito}>|</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.spaceList}>
      <List data={data} renderItem={RenderItem} />
    </View>
  </>
)

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', alignItems: 'center' },

  descriptionItem: { color: '#1C5F94' },

  listItem: {
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    width: '85%'
  },

  palito: {
    color: '#1C5F94',
    fontFamily: 'sans-serif-light',
    fontSize: 82,
    marginLeft: '10%'
  },

  spaceList: {
    flex: 24
  },

  title: {
    alignSelf: 'flex-start',
    color: '#1C5F94',
    fontFamily: 'notoserif',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '5%',
    marginTop: '7%'
  },

  titleItem: { color: '#1C5F94', fontSize: 15, fontWeight: 'bold' },

  titleView: { flex: 5, flexDirection: 'row', marginRight: '10%' }
})

export default Censo
