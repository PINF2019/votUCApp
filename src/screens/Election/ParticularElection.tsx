import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { Text, RadioGroup, Radio, Button, Divider } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Title from '../../components/Title'
import styles from './styles'
import Modal from '../../components/Modal'
import { ParticularElectionScreenProps } from '../../navigator/home.stack'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { BackIcon } from '../../assets/icons'

const ParticularElection = ({
  navigation,
  route
}: ParticularElectionScreenProps) => {
  const { title, date, data } = route.params
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
    <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={title}
        backIcon={BackIcon}
        onBackPress={navigation.goBack}
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

export default ParticularElection
