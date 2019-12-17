import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from '@ui-kitten/components'

const color = '#1C5F94'
const white = 'white'

const stylesCenso = StyleSheet.create({
  palito: {
    color,
    fontSize: 82,
    marginLeft: '10%'
  },
  subtitleText: {
    color,
    flex: 1,
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '3%'
  },
  textSecretary: {
    color,
    fontSize: 20,
    marginLeft: '13%'
  },
  textVotant: {
    color,
    flexShrink: 1,
    fontSize: 20
  },
  title: {
    alignSelf: 'flex-start',
    color,
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '5%',
    marginTop: '7%'
  },
  titleView: {
    flex: 2,
    flexDirection: 'row',
    marginRight: '10%',
    backgroundColor: white,
    marginBottom: '3%'
  },
  votantGeneralView: {
    flex: 8
  },
  votantView: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '15%',
    padding: '3%'
  }
})

const RenderVotante = ({ item }) => {
  return (
    <>
      <View style={stylesCenso.votantView}>
        <Text style={stylesCenso.textVotant}>{item.name}</Text>
      </View>
    </>
  )
}
const censo = ({ title, data, secretario, subsecretario }) => {
  return (
    <>
      <View style={stylesCenso.titleView}>
        <Text style={stylesCenso.palito}>|</Text>
        <Text style={stylesCenso.title}>{title}</Text>
      </View>
      <Text style={stylesCenso.subtitleText}>SECRETARIO:</Text>
      <Text style={stylesCenso.textSecretary}>{secretario}</Text>
      <Text style={stylesCenso.subtitleText}>SUBSECRETARIO:</Text>
      <Text style={stylesCenso.textSecretary}>{subsecretario}</Text>

      <Text style={stylesCenso.subtitleText}>VOTANTES:</Text>
      <View style={stylesCenso.votantGeneralView}>
        <List data={data} renderItem={RenderVotante} />
      </View>
    </>
  )
}

export default censo
