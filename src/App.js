import React, { Component } from 'react';
import HeaderApp from './app/components/layout/HeaderApp';
import AppFooter from './app/components/layout/AppFooter';
import AppContainer from './app/components/layout/Container';
import './App.scss';
import { Provider } from 'react-redux';
import configureStore from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={configureStore()}>
          <HeaderApp />
          <AppContainer />
          <AppFooter />
        </Provider>
      </div>
    );
  }
}

export default App;
