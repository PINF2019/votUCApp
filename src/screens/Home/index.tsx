import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { Layout } from 'react-native-ui-kitten'

type Props = {
  navigation: NavigationStackProp
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
