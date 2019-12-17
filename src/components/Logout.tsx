import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'
import { useAuth } from '../context/auth'

const LogOut = () => {
  const { signOut } = useAuth()
  return (
    <View style={styles.button}>
      <Button onPress={signOut} status="danger" appearance="ghost">
        Cerrar Sesión
      </Button>
    </View>
  )
}

export default LogOut

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    top: -20
  }
})
