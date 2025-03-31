import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from '../HomeStack';
import Shorts from './Shorts';
import Subscriptions from './Subscriptions';
import Upload from './Upload';
import Profile from './Profile';
import withNavigationHOC from '../../utils/withNavigationHOC';

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
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
              tabBarAccessibilityLabel: "home-icon",
            }} />

          <Tab.Screen
            name="Shorts"
            component={Shorts}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Icon
                  name={focused ? 'play-circle' : 'play-circle-outline'}
                  size={size}
                  color={color} />
              ),
              tabBarAccessibilityLabel: "shorts-icon",
            }} />
          <Tab.Screen
            name="Upload"
            component={Upload}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="add-circle-outline" size={size} color={color} />
              ),
              tabBarAccessibilityLabel: "upload-icon",
            }}
          />


          <Tab.Screen
            name="Subscriptions"
            component={Subscriptions}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="subscriptions" size={size} color={color} />
              ),
              tabBarAccessibilityLabel: "subscriptions-icon"
            }} />

          <Tab.Screen
            name="You"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color} />
              ),
              tabBarAccessibilityLabel: "profile-icon"
            }} />

        </Tab.Navigator>
      </>
    );
  }
}

export default withNavigationHOC(BottomTabNav);












