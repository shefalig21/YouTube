import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import videos from '../Data/videos';
import VideoCard from '../Components/VideoCard';

export class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container} testID="landing-screen">

        <Header navigation={this.props.navigation} testID="header-component" />
        <SubHeader navigation={this.props.navigation} testID="sub-header" />
        <FlatList
          testID="video-list"
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <VideoCard
              title={item.title}
              channel={item.channel}
              views={item.views}
              time={item.time}
              thumbnail={item.thumbnail}
            />
          )}
        />
      </View>
    );
  }
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});




























