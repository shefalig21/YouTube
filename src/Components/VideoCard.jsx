import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';

class VideoCard extends Component {
  render() {
    const { thumbnail, title, channel, views, time } = this.props;

    return (
      <View style={styles.videoContainer} testID='video-card'>
        <TouchableOpacity style={styles.videoCard} testID="videoCard-touchable">

        <Video
            source={thumbnail} 
            style={styles.videoPlayer}
            controls
            resizeMode="contain"
            testID="video-play"
            // repeat
            // autoPlay
            // muted
          />

          <View style={styles.videoInfo}>

          <Image 
              source={require('../assets/images/panda.png')} 
              style={styles.channelAvatar}
              testID="channel-avatar"
            />

            <View style={styles.videoText}>
              <Text style={styles.videoTitle} testID="video-title">{title}</Text>

              <View style={styles.videoStatsContainer}>
                <Text style={styles.videoChannel}  testID="video-channel">{channel}</Text>
                <Text style={styles.videoSeparator}>•</Text>
                <Text style={styles.videoStats} testID="video-views">{views}</Text>
                <Text style={styles.videoSeparator}>•</Text>
                <Text style={styles.videoStats} testID="video-time">{time}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    marginTop: 35,
  },
  videoCard: {
    marginBottom: 6,
    backgroundColor: '#fff',
  },
  videoPlayer: {
    width: '100%',
    height: 220,
  },
  videoInfo: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  channelAvatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  videoText: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  videoStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  videoChannel: {
    fontSize: 14,
    color: '#606060',
  },
  videoStats: {
    fontSize: 14,
    color: '#606060',
  },
  videoSeparator: {
    marginHorizontal: 5,
    fontSize: 14,
    color: '#606060',
  },
});

export default VideoCard;























