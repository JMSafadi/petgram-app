import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
)
