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
import { useVotesQuery } from '../../generated/hooks'
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
  const { data, loading } = useVotesQuery()

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
            {data ? (
              data.pendingElections.map((e, idk) => {
                return (
                  <ListItem
                    key={idk}
                    title={e.description}
                    description={`${moment(e.start).format('L')} - ${moment(
                      e.end
                    ).format('L')}`}
                    onPress={() => {
                      navigation.navigate(Routes.ELECTION, {
                        id: e.id
                      })
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
                <Text>No tiene votaciones pendientes</Text>
              </View>
            )}
          </View>
        </>
      )}
    </SafeAreaLayout>
  )
}

export default Votes
