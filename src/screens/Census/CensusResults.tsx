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
import { useCensusDataQuery } from '../../generated/hooks'

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
  const { data } = useCensusDataQuery({ variables: { id: route.params.id } })

  return (
    <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={data?.election.description}
        backIcon={BackIcon}
        onBackPress={navigation.goBack}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center' }}>
        <Title title={`Censo de ${data?.election.description}`} subtitle="" />
        <View style={{ flex: 24 }}>
          <View style={styles.items}>
            <View>
              <Text style={styles.title}>Secretario: </Text>
              <Text style={styles.element}>
                {`${data?.election.secretary.firstName} ${data?.election.secretary.lastName}`}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Subsecretario: </Text>
              {data?.election.delegates.map(delegate => (
                <Text
                  style={
                    styles.element
                  }>{`${delegate.firstName} ${delegate.lastName}`}</Text>
              ))}
            </View>
            <View>
              <Text style={styles.title}>Votantes: </Text>
              {data?.election.censuses.map(census => {
                return census.voters.map((voter, idl) => (
                  <Text
                    style={styles.element}
                    key={idl}>{`${voter.firstName} ${voter.lastName}`}</Text>
                ))
              })}
            </View>
          </View>
        </View>
      </Layout>
    </SafeAreaLayout>
  )
}

export default CensusResults
