import AsyncStorage from '@react-native-community/async-storage'
import JwtDecode from 'jwt-decode'
import { setContext } from 'apollo-link-context'

type TokenDTO = {
  iat: number
  exp: number
}

export async function getAuthToken() {
  return AsyncStorage.getItem('token')
}

export async function setAuthToken(token: string) {
  await AsyncStorage.setItem('token', token)
}

export async function removeAuthToken() {
  await AsyncStorage.removeItem('token')
}

export async function isAuthTokenValid() {
  const token = await getAuthToken()
  if (token === null) {
    return false
  }
  const { exp } = JwtDecode<TokenDTO>(token)
  return exp > Date.now() / 1000
}

export const authLink = setContext(async (_, context) => {
  const token = await getAuthToken()
  return token
    ? {
        ...context,
        headers: {
          ...context.headers,
          Authorization: token ? `Bearer ${token}` : ''
        }
      }
    : context
})
