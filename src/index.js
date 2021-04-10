import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloClient client={client}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ApolloClient> */}
  </React.StrictMode>,
  document.getElementById("root")
);