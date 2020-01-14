import React from 'react'
import { Divider, Layout, Text } from '@ui-kitten/components'
import { View, StyleSheet, ScrollView } from 'react-native'
import { PieChart, BarChart, Grid, YAxis } from 'react-native-svg-charts'
import { mapping } from '@eva-design/eva'
import { Toolbar } from '../../components/Toolbar'
import { BackIcon } from '../../assets/icons'
import {
  SafeAreaLayout,
  SaveAreaInset
} from '../../components/safe-area-layout'
import { ResultsScreenProps } from '../../navigator/home.stack'
import Title from '../../components/Title'
import {
  useElectionResultQuery,
  ElectionResultDocument
} from '../../generated/hooks'
import Loading from '../../components/Loading'

const textColor = '#345B96'
const styles = StyleSheet.create({
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  }
})

const textStyleSheet = colorSlice => {
  return StyleSheet.create({
    icon: {
      color: colorSlice,
      fontWeight: 'bold'
    }
  })
}

const randomColor = () =>
  `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7)

const Results = ({ navigation, route }: ResultsScreenProps) => {
  const { data, loading } = useElectionResultQuery({
    variables: { id: route.params.id }
  })

  const resultados = data?.election.results.map(res => {
    const myObj = new Object()
    myObj.votes = Math.floor(Math.random() * 100) // Aquí va esto: 'res.votes', pero como esta a 0 en el back pongo un número a mano.
    myObj.name = `${res.candidate.firstName} ${res.candidate.lastName}`
    myObj.key = data?.election.results.indexOf(res)
    myObj.svg = { fill: randomColor() }
    return myObj
  })

  // console.log(resultados)

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={24}
          stroke="black"
          strokeWidth={0.2}>
          {data.amount}
        </Text>
      )
    })
  }

  const CUT_OFF = 50
  const LabelsBar = ({ x, y, bandwidth, data }) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={value > CUT_OFF ? x(0) + 10 : x(value) + 10}
        y={y(index) + bandwidth / 2}
        fontSize={14}
        fill={value > CUT_OFF ? 'white' : 'black'}
        alignmentBaseline="middle">
        {value}
      </Text>
    ))

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
                <Title title={data?.election.description} subtitle="" />

                <View style={{ flex: 1 }}>
                  {resultados.map(r => (
                    <View key={r.key} style={styles.items}>
                      <Text style={textStyleSheet(r.svg.fill).icon}>
                        {r.name}
                      </Text>
                      <Text style={textStyleSheet(r.svg.fill).icon}>
                        {r.votes.toString()} votos
                      </Text>
                    </View>
                  ))}
                </View>

                <PieChart
                  style={{ height: 200, marginLeft: '10%', marginRight: '10%' }}
                  valueAccessor={({ item }) => item.votes}
                  data={resultados}
                  spacing={0}
                  outerRadius="95%"
                  innerRadius="3%"
                />
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
