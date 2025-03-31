import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import SearchScreen from '../Screens/SearchScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      
      <Stack.Navigator initialRouteName="LandingScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ testID: "landing-screen" }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ testID: "search-screen" }}
        />
      </Stack.Navigator>


    );
  }
}

export default HomeStack;
