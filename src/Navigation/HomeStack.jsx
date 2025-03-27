// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LandingScreen from '../Screens/LandingScreen';
// import SearchScreen from '../Screens/SearchScreen';

// const Stack=createStackNavigator();

// export class HomeStack extends Component {
//   render() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown:false }}>
//             <Stack.Screen name="Landing" component={LandingScreen}/>
//             <Stack.Screen name="SearchScreen" component={SearchScreen}/>
//         </Stack.Navigator>
    
//     )
//   }
// }

// export default HomeStack















import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import SearchScreen from '../Screens/SearchScreen';
import { Text, View } from 'react-native'

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      <View testID="stack-screen">

        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
        </View>
  
    );
  }
}

export default HomeStack;
