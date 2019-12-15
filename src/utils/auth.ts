import AsyncStorage from '@react-native-community/async-storage'
import { setContext } from 'apollo-link-context'

const authLink = setContext(async (_, context) => {
  const token = await AsyncStorage.getItem('userToken')
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

export default authLink
