import React from 'react'
import { ImageProps, ImageStyle, StyleSheet } from 'react-native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name="heart" />
)

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to Home
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by simply changing an import
      </Text>
      <Button style={styles.likeButton} icon={HeartIcon}>
        LIKE
      </Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  likeButton: {
    marginVertical: 16
  },
  text: {
    textAlign: 'center'
  }
})

export default Home
