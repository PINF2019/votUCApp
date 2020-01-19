/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import { ApolloProvider } from '@apollo/client'
import { light as theme, mapping } from '@eva-design/eva'
import { NavigationNativeContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './src/context/auth'
import { AppNavigator } from './src/navigator'
import client from './src/utils/apollo-client'

const App = (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AuthProvider>
        <ApolloProvider client={client}>
          <SafeAreaProvider>
            <NavigationNativeContainer>
              <AppNavigator />
            </NavigationNativeContainer>
          </SafeAreaProvider>
        </ApolloProvider>
      </AuthProvider>
    </ApplicationProvider>
  </>
)

export default App
