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

import { light as theme, mapping } from '@eva-design/eva'
import { NavigationNativeContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppStack } from './src/navigator'
import client from './src/utils/apollo-client'

const App = (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <ApolloProvider client={client}>
        <NavigationNativeContainer>
          <AppStack />
        </NavigationNativeContainer>
      </ApolloProvider>
    </ApplicationProvider>
  </>
)

export default App
