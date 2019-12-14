import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Layout } from '@ui-kitten/components'

type Props = {
  navigation: StackNavigationProp<any>
}

const Home = () => {
  return (
    <Layout style={styles.layout}>
      <View>
        <Text>Home</Text>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Home
