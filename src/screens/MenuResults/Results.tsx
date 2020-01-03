import React from 'react'
import { Divider, Layout, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'
import { Toolbar } from '../../components/Toolbar'
import { BackIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { ResultsScreenProps } from '../../navigator/home.stack'
import Title from '../../components/Title'
import { useElectionResultQuery } from '../../generated/hooks'
import Loading from '../../components/Loading'

const textColor = '#345B96'
const styles = StyleSheet.create({
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  },
  text: {
    color: textColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%'
  }
})

const Results = ({ navigation, route }: ResultsScreenProps) => {
  const { data, loading } = useElectionResultQuery({
    variables: { id: route.params.id }
  })
  return (
    <SafeAreaLayout style={{ flex: 1 }} insets={SaveAreaInset.TOP}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar
            title={data?.election.description}
            backIcon={BackIcon}
            onBackPress={navigation.goBack}
          />
          <Divider />
          {data ? (
            <Layout style={{ flex: 1, justifyContent: 'center' }}>
              <Title title={data?.election.description} subtitle="" />
              <View style={{ flex: 24 }}>
                {data?.election.results.map((d, idk) => (
                  <View key={idk} style={styles.items}>
                    <Text style={styles.text}>
                      {`${d.candidate.firstName} ${d.candidate.lastName}`}
                    </Text>
                    <Text style={styles.text}>{d.votes.toString()} %</Text>
                  </View>
                ))}
              </View>
            </Layout>
          ) : null}
        </>
      )}
    </SafeAreaLayout>
  )
}

export default Results
