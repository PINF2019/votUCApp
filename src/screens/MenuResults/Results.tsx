import React from 'react'
import { Divider, Layout, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'
import { Toolbar } from '../../components/Toolbar'
import { BackIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { ResultsScreenProps } from '../../navigator/home.stack'
import Title from '../../components/Title'

const data = [
  {
    name: 'Kevin López Cala',
    percentaje: 53
  },
  {
    name: 'Raúl Escribano Corrales',
    percentaje: 30
  },
  {
    name: 'Rubén Montero Domínguez',
    percentaje: 17
  }
]

const textColor = '#345B96'
const winnerColor = '#FFA500'
const styles = StyleSheet.create({
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  },
  text: {
    color: textColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%'
  },
  winnerText: {
    color: winnerColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%'
  }
})

const Results = ({ navigation, route }: ResultsScreenProps) => {
  return (
    <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={route.params.title}
        backIcon={BackIcon}
        onBackPress={navigation.goBack}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center' }}>
        <Title title={route.params.title} subtitle="" />
        <View style={{ flex: 24 }}>
          {data.map((e, idk) => (
            <View key={idk} style={styles.items}>
              <Text style={e.percentaje > 50 ? styles.winnerText : styles.text}>
                {e.name}
              </Text>
              <Text style={e.percentaje > 50 ? styles.winnerText : styles.text}>
                {e.percentaje} %
              </Text>
            </View>
          ))}
        </View>
      </Layout>
    </SafeAreaLayout>
  )
}

export default Results
