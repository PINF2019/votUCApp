import { Divider, Layout, ListItem } from '@ui-kitten/components'
import React from 'react'
import { Image, View } from 'react-native'
import moment from 'moment'
import { MenuIcon } from '../../assets/icons'
import image from '../../assets/triangulo.png'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import Title from '../../components/Title'
import { Toolbar } from '../../components/Toolbar'
import styles from './styles'
import { ResultsScreenProps } from '../../navigator/home.stack'
import { Routes } from '../../navigator'
import { usePastElectionResultsQuery } from '../../generated/hooks'
import Loading from '../../components/Loading'

const renderItemAccessory = () => <Image source={image} style={styles.image} />

const MenuResults = ({ navigation }: ResultsScreenProps) => {
  const { data, loading } = usePastElectionResultsQuery({
    fetchPolicy: 'no-cache'
  })

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar
            title="Resultados"
            backIcon={MenuIcon}
            onBackPress={navigation.toggleDrawer}
          />
          <Divider />
          <Layout style={styles.container}>
            <Title title="¿Qué resultados desea conocer?" subtitle="" />
            <View style={styles.spaceList}>
              {data?.electoralProcesses.map(e => {
                if (e.__typename === 'Election') {
                  return (
                    <ListItem
                      key={e.id}
                      title={e.description}
                      description={`${moment(e.start).format('L')} - ${moment(
                        e.end
                      ).format('L')}`}
                      onPress={() =>
                        navigation.navigate(Routes.RESULTS, { id: e.id })
                      }
                      accessory={renderItemAccessory}
                      style={styles.listItem}
                      titleStyle={styles.titleItem}
                      descriptionStyle={styles.descriptionItem}
                    />
                  )
                }
                return null
              })}
            </View>
          </Layout>
        </>
      )}
    </SafeAreaLayout>
  )
}

export default MenuResults
