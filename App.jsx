import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/Bottom Tab Navigation/BottomTabNav';




class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabNav/>
      </NavigationContainer>
    );
  }
}

export default App;

