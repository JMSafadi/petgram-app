import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './context'

const client = new ApolloClient({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token ') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Context.Provider>
)
