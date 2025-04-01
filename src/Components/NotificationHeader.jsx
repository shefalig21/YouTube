import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class NotificationHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer} testID="notification">
        <View style={styles.leftIcons}>
         
          <TouchableOpacity style={styles.iconSpacing} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" size={24} style={styles.icon} testID="arrow-icon"/>
          </TouchableOpacity>
          
          <Text style={styles.text}>Notifications</Text>
        </View>

        <View style={styles.rightIcons}>
          
          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="cast" size={24} color="black" testID="cast-icon" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="notifications-none" size={25} color="black" testID="notification-icon" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconSpacing} onPress={this.handleSearch}>
            <Icon name="more-vert" size={25} color="black" testID="more-icon"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:-24,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 20,
  },
  icon: {
    color: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default NotificationHeader;
