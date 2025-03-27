import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNav';

const App = () => {
  return (
    <NavigationContainer> 
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default App;
