import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './context'

const client = new ApolloClient({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql'
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Context.Provider>
)
