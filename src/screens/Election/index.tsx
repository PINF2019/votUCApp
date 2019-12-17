import { Button, Divider, Radio, RadioGroup } from '@ui-kitten/components'
import React, { useCallback, useState } from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MenuIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { ElectionScreenProps } from '../../navigator/home.stack'
import styles from './styles'
import Title from '../../components/Title'
import Modal from '../../components/Modal'

const title = 'Elección Delegados/as'
const date = '13/11/19 - 20/11/19'

const data = [
  { name: 'Raúl Escribano Corrales' },
  { name: 'Borja Romero Fernández' },
  { name: 'Antonio José Sánchez Muñoz' }
]

const Election = ({ navigation }: ElectionScreenProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  )
  const [validate, setValidate] = useState(true)
  const [modal, setModal] = useState(false)

  const onCheckedChange = useCallback(
    (index: number) => setSelectedIndex(index),
    []
  )

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title="Elecciones"
        backIcon={MenuIcon}
        onBackPress={navigation.toggleDrawer}
      />
      <Divider />
      <View style={styles.safeArea}>
        <Title title={title} subtitle={date} />
        <Text style={styles.choice}> Su elección:</Text>
        <SafeAreaView style={styles.listView}>
          <ScrollView style={styles.listView}>
            <RadioGroup
              selectedIndex={selectedIndex}
              onChange={onCheckedChange}>
              {data.map((candidate, idx) => (
                <Radio
                  textStyle={styles.radioTextStyle}
                  text={candidate.name}
                  key={`radio-${idx}`}
                  status="warning"
                  style={styles.radio}
                />
              ))}
            </RadioGroup>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.bottomButton}>
          <Button
            onPress={() => setValidate(prev => !prev)}
            style={styles.buttonLeft}
            size="giant">
            Validar mi elección
          </Button>
          <Button
            onPress={() => setModal(true)}
            disabled={validate || selectedIndex === undefined}
            style={styles.buttonRight}
            size="giant">
            VOTAR
          </Button>
        </View>
        <Modal
          visible={modal}
          title="Gracias por su participación"
          subtitle="Su voto ha sido enviado"
        />
      </View>
    </SafeAreaLayout>
  )
}

export default Election
