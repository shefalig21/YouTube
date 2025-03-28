import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import SearchScreen from '../Screens/SearchScreen';
import { SafeAreaView, View } from "react-native";

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      <>
        <View testID="stack-screen" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingScreen"
            component={LandingScreen}
            options={{ testID: "landing-screen" }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ testID: "search-screen" }}
          />
        </Stack.Navigator>
      </>
    );
  }
}

export default HomeStack;
