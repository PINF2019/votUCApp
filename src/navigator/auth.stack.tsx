/* eslint-disable no-nested-ternary */
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import JwtDecode from 'jwt-decode'
import React, { useEffect, useMemo } from 'react'
import { Welcome } from '../screens'
import Login from '../screens/Login'
import HomeNavigator from './home.stack'
import Routes from './routes'

type AuthContextAction = {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT'
  token: string | null | undefined
}

type AuthContextState = {
  isLoading: boolean
  userToken: string | null | undefined
  isTokenValid: boolean
}

type AuthContextT = {
  signIn: (token: string) => void
  signOut: () => void
}

type TokenDTO = {
  iat: number
  exp: number
}

const Stack = createStackNavigator()
export const AuthContext = React.createContext({} as AuthContextT)

const authContextReducer = (
  prevState: AuthContextState,
  action: AuthContextAction
) => {
  switch (action.type) {
    case 'RESTORE_TOKEN': {
      const isTokenValid = action.token
        ? JwtDecode<TokenDTO>(action.token as string).exp > Date.now() / 1000
        : false
      return {
        userToken: action.token,
        isLoading: false,
        isTokenValid
      }
    }
    case 'SIGN_IN':
      return {
        ...prevState,
        userToken: action.token,
        isTokenValid:
          JwtDecode<TokenDTO>(action.token as string).exp > Date.now() / 1000
      }
    case 'SIGN_OUT':
      return {
        ...prevState,
        userToken: action.token
      }
    default:
      return prevState
  }
}

const AuthStack = () => {
  const [state, dispatch] = React.useReducer(authContextReducer, {
    isLoading: true,
    userToken: null,
    isTokenValid: false
  })

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch {
        userToken = null
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async (token: string) => {
        await AsyncStorage.setItem('userToken', token)
        dispatch({ type: 'SIGN_IN', token })
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken')
        dispatch({ type: 'SIGN_OUT', token: null })
      }
    }),
    []
  )

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator headerMode="none">
        {state.isLoading ? (
          <Stack.Screen name={Routes.WELCOME} component={Welcome} />
        ) : state.userToken !== null && state.isTokenValid ? (
          <Stack.Screen name={Routes.HOME} component={HomeNavigator} />
        ) : (
          <Stack.Screen name={Routes.LOGIN} component={Login} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export default AuthStack
