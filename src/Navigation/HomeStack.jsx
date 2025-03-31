// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LandingScreen from '../Screens/LandingScreen';
// import SearchScreen from '../Screens/SearchScreen';
// import { SafeAreaView, View } from "react-native";
// import DrawerNav from './DrawerNavigation/DrawerNav';

// const Stack = createStackNavigator();

// class HomeStack extends Component {
//   render() {
//     return (

//         <View testID="stack-screen" >
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="DrawerNav"
//             component={DrawerNav}
//             options={{ testID: "drawerNav-screen" }} 
//           />
//           <Stack.Screen
//             name="SearchScreen"
//             component={SearchScreen}
//             options={{ testID: "search-screen" }}
//           />
//         </Stack.Navigator>
//         </View>
    
//     );
//   }
// }

// export default HomeStack;


import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../Screens/SearchScreen';
import DrawerNav from './DrawerNavigation/DrawerNav';

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="DrawerNav"
          component={DrawerNav}
          options={{ testID: "drawerNav-screen" }} 
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















