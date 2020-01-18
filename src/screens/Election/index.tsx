import { Divider, ListItem, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import moment from 'moment'
import { MenuIcon } from '../../assets/icons'
import image from '../../assets/triangulo.png'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { Toolbar } from '../../components/Toolbar'
import { Routes } from '../../navigator'
import { VotesScreenProps } from '../../navigator/home.stack'
import { usePastElectionsQuery } from '../../generated/hooks'
import Loading from '../../components/Loading'

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const listColor = '#F0F0F0'
const color = '#345B96'
const styles = StyleSheet.create({
  areaLayout: { flex: 1 },
  container: {
    alignItems: 'center',
    marginBottom: 10
  },
  descriptionItem: { color },
  image: {
    height: 25,
    width: 25
  },
  listItem: {
    alignSelf: 'center',
    backgroundColor: listColor,
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    width: '85%'
  },
  spaceList: {
    flex: 24
  },
  title: {
    color,
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: '5%',
    paddingTop: '8%'
  },
  titleItem: { color, fontSize: 15, fontWeight: 'bold' }
})

const Votes = ({ navigation }: VotesScreenProps) => {
  const { data, loading } = usePastElectionsQuery({ fetchPolicy: 'no-cache' })
  return (
    <SafeAreaLayout style={styles.areaLayout} insets={SaveAreaInset.TOP}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar
            title="Votaciones"
            backIcon={MenuIcon}
            onBackPress={navigation.toggleDrawer}
          />
          <Divider />
          <View style={styles.container}>
            <Text style={styles.title}>VOTACIONES PENDIENTES</Text>
          </View>

          <View style={styles.spaceList}>
            {data?.pendingElectoralProcesses.length > 0 ? (
              data.pendingElectoralProcesses.map((elecOrPoll, idk) => {
                return (
                  <ListItem
                    key={idk}
                    title={elecOrPoll.description}
                    description={`${moment(elecOrPoll.start).format(
                      'L'
                    )} - ${moment(elecOrPoll.end).format('L')}`}
                    onPress={() => {
                      if (elecOrPoll.__typename === 'Election') {
                        navigation.navigate(Routes.ELECTION, {
                          id: elecOrPoll.id
                        })
                      } else {
                        navigation.navigate(Routes.POLL, {
                          id: elecOrPoll.id
                        })
                      }
                    }}
                    accessory={renderItemAccessory}
                    style={styles.listItem}
                    titleStyle={styles.titleItem}
                    descriptionStyle={styles.descriptionItem}
                  />
                )
              })
            ) : (
              <View style={styles.container}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'grey'
                  }}>
                  No tiene votaciones pendientes
                </Text>
              </View>
            )}
          </View>
        </>
      )}
    </SafeAreaLayout>
  )
}

export default Votes
