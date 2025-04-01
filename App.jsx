import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNavigation/BottomTabNav';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNav/>
    </NavigationContainer>
  );
};

export default App;
