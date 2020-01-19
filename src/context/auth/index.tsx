import React, {
  useReducer,
  useEffect,
  ReactNode,
  useMemo,
  useContext
} from 'react'
import JwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-community/async-storage'

type AuthContextAction = {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT'
  token: string | null | undefined
}

type AuthContextState = {
  isLoading: boolean
  userToken: string | null | undefined
}

type TokenDTO = {
  iat: number
  exp: number
}

type AuthContextType = {
  signIn: (token: string) => Promise<void>
  signOut: () => Promise<void>
  isLoading: boolean
  userToken: string | null | undefined
}

const AuthContext = React.createContext({} as AuthContextType)

const authReducer = (
  prevState: AuthContextState,
  action: AuthContextAction
) => {
  switch (action.type) {
    case 'RESTORE_TOKEN': {
      return {
        userToken: action.token,
        isLoading: false
      }
    }
    case 'SIGN_IN':
      return {
        ...prevState,
        userToken: action.token
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    userToken: null
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
      },
      isLoading: state.isLoading,
      userToken: state.userToken
    }),
    [state.isLoading, state.userToken]
  )

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { signIn, userToken, signOut, isLoading } = useContext(AuthContext)
  const isTokenValid = userToken
    ? JwtDecode<TokenDTO>(userToken).exp > Date.now() / 1000
    : false
  return { signIn, isTokenValid, userToken, signOut, isLoading }
}
