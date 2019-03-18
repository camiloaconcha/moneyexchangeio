import React, { Component } from 'react';
import HeaderApp from './app/components/layout/HeaderApp';
import AppFooter from './app/components/layout/AppFooter';
import AppContainer from './app/components/layout/Container';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderApp />
        <AppContainer />
        <AppFooter />
      </div>
    );
  }
}

export default App;
