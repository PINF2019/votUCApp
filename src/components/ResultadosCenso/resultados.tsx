import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { List } from '@ui-kitten/components'

const white = 'white'
const color = '#1C5F94'

const styles = StyleSheet.create({
  candidateView: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '15%',
    padding: '3%'
  },
  candidatesView: {
    flex: 8
  },
  container: { flex: 1, flexDirection: 'column', alignItems: 'center' },
  palito: {
    color,
    fontFamily: 'sans-serif-light',
    fontSize: 82,
    marginLeft: '10%'
  },
  textCandidate: {
    color,
    flexShrink: 1,
    fontSize: 20
  },
  textFirstCandidate: {
    color: 'orange',
    fontSize: 20
  },
  textPercentage: {
    color,
    fontSize: 20
  },

  title: {
    alignSelf: 'flex-start',
    color,
    fontFamily: 'notoserif',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '5%',
    marginTop: '7%'
  },

  titleView: {
    flex: 2,
    flexDirection: 'row',
    marginRight: '10%',
    backgroundColor: white
  }
})

const RenderFirstItem = ({ item }) => {
  return (
    <>
      <View style={styles.candidateView}>
        <Text style={styles.textFirstCandidate}>{item.candidateName}</Text>
        <Text style={styles.textPercentage}>{item.votePercentage}</Text>
      </View>
    </>
  )
}

const RenderItem = ({ item, index }) => {
  if (index === 0) {
    return (
      <>
        <View style={styles.candidateView}>
          <Text style={styles.textFirstCandidate}>{item.candidateName}</Text>
          <Text style={styles.textPercentage}>{item.votePercentage}</Text>
        </View>
      </>
    )
  }
  return (
    <>
      <View style={styles.candidateView}>
        <Text style={styles.textCandidate}>{item.candidateName}</Text>
        <Text style={styles.textCandidate}>{item.votePercentage}</Text>
      </View>
    </>
  )
}

const resultado = ({ title, data }) => {
  return (
    <>
      <View style={styles.titleView}>
        <Text style={styles.palito}>|</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.candidatesView}>
        <List data={data} renderItem={RenderItem} />
      </View>
    </>
  )
}

export default resultado
