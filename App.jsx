import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNavigation/BottomTabNav';
import NotificationHeader from './src/Components/NotificationHeader';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNav/>
    </NavigationContainer>
  );
};

export default App;
