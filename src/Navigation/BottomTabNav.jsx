import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './HomeStack';
import Shorts from './Shorts';
import Subscriptions from './Subscriptions';
import You from './You';
import Add from './Add';
import withNavigationHOC from '../utils/withNavigationHOC';

const Tab = createBottomTabNavigator();

class BottomTabNav extends React.Component {
  handleAdd = () => {
    this.props.navigation.navigate('Add');
  };

  render() {
    return (
      <>
        <View testID="bottom-tab" />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            // component={HomeStack}
            component={() => <HomeStack testID="home-screen" />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
              testID: "home-icon",
            }}
          />

          <Tab.Screen
            name="Shorts"
            component={()=> <Shorts testID="shorts-screen"/>}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Icon
                  name={focused ? 'play-circle' : 'play-circle-outline'}
                  size={size}
                  color={color}
                />
              ),
              testID: "shorts-icon",
            }}
          />

          <Tab.Screen
            name="Add"
            component={()=> <Add testID="add-screen"/>}
            options={{
              tabBarButton: () => (
                <TouchableOpacity
                  onPress={this.handleAdd}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 32,
                    // borderWidth:1,
                    backgroundColor: '#F5F5F5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 5,
                    left: '61%',
                    marginLeft: -32.5,
  
                  }}
                >
                  <Icon name="add" size={25} color="black" />
                </TouchableOpacity>
              ),
            }}
          />

          <Tab.Screen
            name="Subscriptions"
            component={()=> <Subscriptions testID="subscriptions-screen"/>}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="subscriptions" size={size} color={color} />
              ),
              testID: "subscriptions-icon",
            }}
          />
          <Tab.Screen
            name="You"
            component={()=> <You testID="you-screen"/>}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color}
                />
              ),
              testID: "you-icon",
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default withNavigationHOC(BottomTabNav);

































// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import HomeStack from './HomeStack';
// import Shorts from './Shorts';
// import Subscriptions from './Subscriptions';
// import You from './You';
// import Add from './Add';
// import withNavigationHOC from '../utils/withNavigationHOC';

// const Tab = createBottomTabNavigator();

// class BottomTabNav extends React.Component {
//   handleAdd = () => {
//     this.props.navigation.navigate('Add');
//   };

//   render() {
//     return (
//       <>
//         <View testID="bottom-tab" />
//         <Tab.Navigator
//           screenOptions={{
//             tabBarActiveTintColor: 'blue',
//             tabBarInactiveTintColor: 'black',
//             headerShown: false,
//           }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={HomeStack}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="home" size={size} color={color} />
//               ),
//               testID: "home-icon",
//             }}
//           />

//           <Tab.Screen
//             name="Shorts"
//             component={Shorts}
//             options={{
//               tabBarIcon: ({ color, size, focused }) => (
//                 <Icon
//                   name={focused ? 'play-circle' : 'play-circle-outline'}
//                   size={size}
//                   color={color}
//                 />
//               ),
//               testID: "shorts-icon",
//             }}
//           />

//           <Tab.Screen
//             name="Add"
//             component={Add}
//             options={{
//               tabBarButton: () => (
//                 <TouchableOpacity
//                   onPress={this.handleAdd}
//                   style={{
//                     width: 35,
//                     height: 35,
//                     borderRadius: 32,
//                     // borderWidth:1,
//                     backgroundColor: '#F5F5F5',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     position: 'absolute',
//                     bottom: 5,
//                     left: '61%',
//                     marginLeft: -32.5,
  
//                   }}
//                 >
//                   <Icon name="add" size={25} color="black" />
//                 </TouchableOpacity>
//               ),
//             }}
//           />

//           <Tab.Screen
//             name="Subscriptions"
//             component={Subscriptions}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="subscriptions" size={size} color={color} />
//               ),
//               testID: "subscriptions-icon",
//             }}
//           />
//           <Tab.Screen
//             name="You"
//             component={You}
//             options={{
//               tabBarIcon: ({ color, size, focused }) => (
//                 <Icon
//                   name={focused ? 'person' : 'person-outline'}
//                   size={size}
//                   color={color}
//                 />
//               ),
//               testID: "you-icon",
//             }}
//           />
//         </Tab.Navigator>
//       </>
//     );
//   }
// }

// export default withNavigationHOC(BottomTabNav);
