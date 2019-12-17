/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Button, Radio, RadioGroup } from '@ui-kitten/components'
import React from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

const title = 'Elección Delegados/as'

const date = '13/11/19 - 20/11/19'

const data = [
  { name: 'Raúl Escribano Corrales' },
  { name: 'Borja Romero Fernández' },
  { name: 'Antonio José Sánchez Muñoz' }
]

const Election = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>(
    undefined
  )

  const [stateB, setStateB] = React.useState<boolean>(true)

  const modifyState = () => setStateB(!stateB)

  const onCheckedChange = (index: number) =>
    setSelectedIndex(index === selectedIndex ? undefined : index)

  //   const renderItem = ({ item }) => (
  //     <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
  //       {data.map(candidate => (
  //         <Radio text={candidate.name} />
  //       ))}
  //     </RadioGroup>
  //   )

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleView}>
        <Text style={styles.palito}>|</Text>
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.elec}> Su elección:</Text>
      <SafeAreaView style={styles.listView}>
        <ScrollView style={styles.listView}>
          {/* <List data={data} renderItem={renderItem} /> */}
          <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
            {data.map((candidate, idx) => (
              // no se como poner el view para que se vea bonito y siga
              // funcionando el radio, creo q deja de funcionar pq el radiogroup
              // tiene que tener directamente radio y no vale con el view
              <View style={styles.radio} key={`radio-${idx}`}>
                <Radio
                  textStyle={{
                    fontSize: 22,
                    color: '#345B96',
                    fontWeight: 'bold'
                  }}
                  text={candidate.name}
                  key={`radio-${idx}`}
                  status="warning"
                />
              </View>
            ))}
          </RadioGroup>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomButton}>
        <Button onPress={modifyState} style={styles.buttonLeft} size="giant">
          Validar mi elección
        </Button>
        <Button
          onPress={() => Alert.alert('enhorabuena has votado')}
          disabled={stateB}
          style={styles.buttonRight}
          size="giant">
          VOTAR
        </Button>
      </View>
    </View>
  )
}

export default Election
