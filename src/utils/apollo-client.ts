import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import authLink from './auth'

const httpLink = createHttpLink({
  uri: 'http://10.182.106.145:7000/graphql'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  link: authLink.concat(httpLink)
})

export default client
