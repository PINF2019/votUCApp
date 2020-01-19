import React from 'react'
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import fondo from '../../assets/background.jpg'
import logo from '../../assets/votucaLogo.png'

const Welcome = () => {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity style={styles.layout} onPress={() => navigate('auth')}>
      <ImageBackground source={fondo} style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.title} source={logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tu voto,</Text>
          <Text style={styles.text}>comodamente</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default Welcome
