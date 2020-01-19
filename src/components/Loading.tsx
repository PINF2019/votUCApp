import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Spinner } from '@ui-kitten/components'

const styles = StyleSheet.create({
  centeredLoading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

const Loading = () => (
  <View style={styles.centeredLoading}>
    <Spinner />
  </View>
)

export default Loading
