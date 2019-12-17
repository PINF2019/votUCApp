import React from 'react'
import { View } from 'react-native'
import { Button } from '@ui-kitten/components'
import { useAuth } from '../context/auth'

const LogOut = () => {
  const { signOut } = useAuth()
  return (
    <View>
      <Button onPress={signOut}>Cerrar Sesión</Button>
    </View>
  )
}

export default LogOut
