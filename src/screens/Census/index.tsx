import { Divider, Layout, ListItem } from '@ui-kitten/components'
import moment from 'moment'
import React from 'react'
import { Image, View } from 'react-native'
import { MenuIcon } from '../../assets/icons'
import image from '../../assets/triangulo.png'
import Loading from '../../components/Loading'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import Title from '../../components/Title'
import { Toolbar } from '../../components/Toolbar'
import { usePastElectionResultsQuery } from '../../generated/hooks'
import { Routes } from '../../navigator'
import { CensusScreenProps } from '../../navigator/home.stack'
import styles from './style'

export type CensoProps = {
  title: string
  description: string
}

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const Census = ({ navigation }: CensusScreenProps) => {
  const { data, loading } = usePastElectionResultsQuery({
    fetchPolicy: 'no-cache'
  })
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title="Censo"
        backIcon={MenuIcon}
        onBackPress={navigation.toggleDrawer}
      />
      <Divider />
      {loading ? (
        <Loading />
      ) : (
        <Layout style={styles.container}>
          <Title title="¿Qué censo desea conocer?" subtitle="" />
          <View style={styles.spaceList}>
            {data &&
              data.electoralProcesses.map(
                election =>
                  election.__typename === 'Election' && (
                    <ListItem
                      key={election.id}
                      title={election.description}
                      description={`${moment(election.start).format(
                        'L'
                      )} - ${moment(election.end).format('L')}`}
                      onPress={() =>
                        navigation.navigate(Routes.CENSUS_RESULTS, {
                          id: election.id
                        })
                      }
                      accessory={renderItemAccessory}
                      style={styles.listItem}
                      titleStyle={styles.titleItem}
                      descriptionStyle={styles.descriptionItem}
                    />
                  )
              )}
          </View>
        </Layout>
      )}
    </SafeAreaLayout>
  )
}

export default Census
