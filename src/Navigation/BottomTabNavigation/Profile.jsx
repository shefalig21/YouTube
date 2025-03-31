import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Profile extends Component {
  render() {
   
    return (
      <ScrollView style={styles.container} testID={"profile-screen"}>
        <View style={styles.headerContainer}>

        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Shefali Gupta</Text>
            <Text style={styles.profileSubtext}>Create a channel</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Switch account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Google Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Turn on Incognito</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {

  },
  profileContainer: {
    marginTop: 50,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 25,
    marginRight: 15
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  profileSubtext: {
    color: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#eee',
    padding: 9,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Profile;