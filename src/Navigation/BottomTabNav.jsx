import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LandingScreen from '../Screens/LandingScreen';
import Shorts from './Shorts';
import Subscriptions from './Subscriptions';
import You from './You';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={LandingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={Shorts}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="play-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="subscriptions" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="You"
          component={You}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;




























// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import LandingScreen from '../Screens/LandingScreen';
// import Shorts from './Shorts';
// import Subscriptions from './Subscriptions';
// import You from './You';

// const Tab = createBottomTabNavigator();

// const BottomTabNav = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'black',
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={LandingScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Shorts"
//           component={Shorts}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="play-circle-outline" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Subscriptions"
//           component={Subscriptions}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="subscriptions" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="You"
//           component={You}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="person" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default BottomTabNav;












