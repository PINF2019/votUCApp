import React from 'react'
import moment from 'moment'
import { Divider, Layout, Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import { PieChart, BarChart, Grid } from 'react-native-svg-charts'
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
import styles from './styles'

const randomColor = () => {
  // const colors = [
  //   `rgb(${39 + Math.floor(Math.random() * 39 - 39)},${174 +
  //     Math.floor(Math.random() * 39 - 39)},${96 +
  //     Math.floor(Math.random() * 39 - 39)})`,
  //   `rgb(${45 + Math.floor(Math.random() * 39 - 39)},${156 +
  //     Math.floor(Math.random() * 39 - 39)},${219 +
  //     Math.floor(Math.random() * 39 - 39)})`,
  //   `rgb(${220 + Math.floor(Math.random() * 30 - 30)},${165 +
  //     Math.floor(Math.random() * 30 - 30)},${30 +
  //     Math.floor(Math.random() * 30 - 30)})`
  // ]
  // return colors[Math.floor(Math.random() * 2)]
  return `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7)
}

interface ResultsInterface {
  key: number
  votes: number
  name: string
  svg: {
    fill: string
  }
}

const Results = ({ navigation, route }: ResultsScreenProps) => {
  const { data, loading } = useElectionResultQuery({
    variables: { id: route.params.id }
  })

  let resultados = data?.election.results.results.map((res, key) => {
    return {
      key,
      votes: res.votes,
      name: `${res.candidate.firstName} ${res.candidate.lastName}`,
      svg: { fill: randomColor() }
    }
  })
  resultados = resultados?.sort((a: ResultsInterface, b: ResultsInterface) =>
    a.votes > b.votes ? -1 : 1
  )

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
            <ScrollView>
              <Layout style={{ flex: 1, justifyContent: 'center' }}>
                <Title
                  title={data?.election.description}
                  subtitle={`${moment(data?.election.start).format(
                    'L'
                  )} - ${moment(data?.election.end).format('L')}`}
                />

                <View style={styles.containerV2}>
                  <Text style={styles.pipe}>|</Text>
                  <Text style={styles.title}>Datos Globales</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={styles.items}>
                    <Text style={styles.icon}>Número total de electores:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.votesCast.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Votos a candidaturas:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.voters.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Votos en blanco:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.whiteVotes.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Votos nulos:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.votesCast.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Votos totales válidos:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.votesCast.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Participación:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.votesCast.toString()}
                    </Text>
                  </View>

                  <View style={styles.items}>
                    <Text style={styles.icon}>Abstención:</Text>
                    <Text style={styles.icon}>
                      {data?.election.results.votesCast.toString()}
                    </Text>
                  </View>
                </View>

                <PieChart
                  style={{ height: 200, marginLeft: '10%', marginRight: '10%' }}
                  valueAccessor={({ item }) => item.votes}
                  data={resultados}
                  spacing={0}
                  outerRadius="95%"
                  innerRadius="50%"
                  labelRadius={10}
                />

                <View style={{ flex: 1 }}>
                  {resultados &&
                    resultados.map(r => (
                      <View key={r.key} style={styles.items}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            margin: 7,
                            color: r.svg.fill
                          }}>
                          {r.name}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            margin: 7,
                            color: r.svg.fill
                          }}>
                          {r.votes.toString()} votos
                        </Text>
                      </View>
                    ))}
                </View>
                <BarChart
                  style={{ height: 200, marginLeft: '10%', marginRight: '10%' }}
                  data={resultados}
                  horizontal
                  yAccessor={({ item }) => item.votes}
                  contentInset={{ top: 10, bottom: 10 }}
                  spacing={0.2}
                  gridMin={0}>
                  <Grid direction={Grid.Direction.VERTICAL} />
                </BarChart>
              </Layout>
            </ScrollView>
          ) : null}
        </>
      )}
    </SafeAreaLayout>
  )
}

export default Results
