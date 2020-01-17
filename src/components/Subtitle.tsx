import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const color = '#345B96'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: '10%'
  },
  pipe: {
    color: 'orange',
    fontSize: 0.12 * Dimensions.get('window').width
  },

  title: {
    color,
    fontSize: 0.04 * Dimensions.get('window').width,
    fontWeight: 'bold'
  },
  titleContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginRight: '15%',
    marginTop: '6%'
  }
})

export type TitleProps = {
  title: string
  subtitle: string
}

const Title = ({ title }: TitleProps) => (
  <View style={styles.container}>
    <Text style={styles.pipe}>|</Text>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
)

export default Title
