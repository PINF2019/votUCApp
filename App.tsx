import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { light as theme, mapping } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import Navigator from './src/Navigator'
import client from './src/utils/apollo-client'

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </ApplicationProvider>
  </>
)

export default App
