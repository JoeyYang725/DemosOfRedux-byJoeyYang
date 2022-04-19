import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Content from './Content';
import Header from './Header';
import store from '../store';
import { Provider } from '../libraries/my-react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    )
  }
}

export default App