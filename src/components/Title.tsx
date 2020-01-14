import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { TranslationWidth } from '@ui-kitten/components'

const color = '#345B96'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: '5%'
  },
  pipe: {
    color,
    fontSize: 0.2 * Dimensions.get('window').width
  },
  subtitle: {
    color,
    fontSize: 19
  },
  title: {
    color,
    fontSize: 0.07 * Dimensions.get('window').width,
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

const Title = ({ title, subtitle }: TitleProps) => (
  <View style={styles.container}>
    <Text style={styles.pipe}>|</Text>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
)

export default Title
