import { Button, Divider, Radio, RadioGroup, Text } from '@ui-kitten/components'
import moment from 'moment'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon } from '../../assets/icons'
import Modal from '../../components/Modal'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import Title from '../../components/Title'
import { Toolbar } from '../../components/Toolbar'
import {
  useOptionsOnPollQuery,
  useVoteElectionMutation,
  useVotePollMutation
} from '../../generated/hooks'
import { ParticularElectionScreenProps } from '../../navigator/home.stack'
import styles from './styles'
import Loading from '../../components/Loading'

const ParticularPoll = ({
  navigation,
  route
}: ParticularElectionScreenProps) => {
  const { data, loading } = useOptionsOnPollQuery({
    variables: { id: route.params.id }
  })
  const [vote] = useVotePollMutation()

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  )

  const [modal, setModal] = useState(false)

  const onCheckedChange = useCallback(
    (index: number) => setSelectedIndex(index),
    []
  )

  if (data) {
    return (
      <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Toolbar
              title={data.poll.description}
              backIcon={BackIcon}
              onBackPress={navigation.goBack}
            />
            <Divider />
            <View style={styles.safeArea}>
              <ScrollView>
                <Title
                  title={data.poll.description}
                  subtitle={`${moment(data.poll.start).format('L')} - ${moment(
                    data.poll.end
                  ).format('L')}`}
                />
                <Text style={styles.choice}> Su elección:</Text>
                <SafeAreaView style={styles.listView}>
                  <RadioGroup
                    selectedIndex={selectedIndex}
                    onChange={onCheckedChange}>
                    {data.poll.options.map(option => (
                      <Radio
                        textStyle={styles.radioTextStyle}
                        text={`${option.text}`}
                        key={option.id}
                        status="warning"
                        style={styles.radio}
                      />
                    ))}
                  </RadioGroup>
                </SafeAreaView>
                <View style={styles.bottomButton}>
                  {/* <Button
              onPress={() => setValidate(prev => !prev)}
              style={styles.buttonLeft}
              size="giant">
              Validar mi elección
            </Button> */}
                  <Button
                    onPress={async () => {
                      const candidateId = data.poll.options[selectedIndex].id
                      const { errors } = await vote({
                        variables: {
                          input: {
                            options: [candidateId as string],
                            poll: route.params.id
                          }
                        }
                      })
                      if (errors) {
                        console.warn(errors, { depth: Infinity })
                      } else {
                        setModal(true)
                      }
                    }}
                    disabled={selectedIndex === undefined}
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
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaLayout>
    )
  }
  return null
}

export default ParticularPoll
