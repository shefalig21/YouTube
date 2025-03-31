import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/Navigation/DrawerNavigation/DrawerNav'; // Ensure DrawerNav is the root

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default App;
