import React, { Component } from 'react';
import { Provider } from 'react-redux';
 
import CounterPage from './CounterPage';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <CounterPage />
      </Provider>
    );
  }
}
