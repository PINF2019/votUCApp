import React from 'react'
import { Divider, Layout, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'
import { Toolbar } from '../../components/Toolbar'
import { BackIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { CensusResultsScreenProps } from '../../navigator/home.stack'
import Title from '../../components/Title'

const data = {
  secretario: 'Apellido1 Apellido2, Nombre',
  subsecretario: 'Apellido1 Apellido2, Nombre',
  votantes: [
    'Apellido1 Apellido2, Nombre',
    'Apellido1 Apellido2, Nombre',
    'Apellido1 Apellido2, Nombre',
    'Apellido1 Apellido2, Nombre',
    'Apellido1 Apellido2, Nombre'
  ]
}

const textColor = '#345B96'
const styles = StyleSheet.create({
  element: {
    color: textColor,
    fontSize: 20,
    marginTop: '2%'
  },
  items: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  },
  title: {
    color: textColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '8%'
  }
})

const CensusResults = ({ navigation, route }: CensusResultsScreenProps) => {
  return (
    <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={route.params.title}
        backIcon={BackIcon}
        onBackPress={navigation.goBack}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center' }}>
        <Title title={`Censo de ${route.params.title}`} subtitle="" />
        <View style={{ flex: 24 }}>
          <View style={styles.items}>
            <View>
              <Text style={styles.title}>Secretario: </Text>
              <Text style={styles.element}>{data.secretario}</Text>
            </View>
            <View>
              <Text style={styles.title}>Subsecretario: </Text>
              <Text style={styles.element}>{data.subsecretario}</Text>
            </View>
            <View>
              <Text style={styles.title}>Votantes: </Text>
              {data.votantes.map((e, idk) => (
                <Text style={styles.element} key={idk}>
                  {e}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Layout>
    </SafeAreaLayout>
  )
}

export default CensusResults
