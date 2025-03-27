import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

class VideoCard extends Component {
  render() {
    const { thumbnail, title, channel, views, time } = this.props;
    
    return (
        <View style={styles.videoContainer}>
      <TouchableOpacity style={styles.videoCard}>

        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />

        <View style={styles.videoInfo}>

          <Image
            source={require('../assets/images/panda.png')} 
            style={styles.channelAvatar}
          />

          <View style={styles.videoText}>
            <Text style={styles.videoTitle}>{title}</Text>

            <View style={styles.videoStatsContainer}>
              <Text style={styles.videoChannel}>{channel}</Text>
              <Text style={styles.videoSeparator}>•</Text>
              <Text style={styles.videoStats}>{views}</Text>
              <Text style={styles.videoSeparator}>•</Text>
              <Text style={styles.videoStats}>{time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
videoContainer:{
    marginTop:35,
},
  videoCard: {
    marginBottom: 6,
    backgroundColor: '#fff',
  },
  thumbnail: {
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
















































// import React, { Component } from 'react';
// import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

// class VideoCard extends Component {
//   render() {
//     const { thumbnail, title, channel, views, time } = this.props;
    
//     return (
//         <View style={styles.videoContainer}>
//       <TouchableOpacity style={styles.videoCard}>

//         <Image source={{ uri: thumbnail }} style={styles.thumbnail} />

//         <View style={styles.videoInfo}>

//           <Image
//             source={require('../assets/images/panda.png')} 
//             style={styles.channelAvatar}
//           />

//           <View style={styles.videoText}>
//             <Text style={styles.videoTitle}>{title}</Text>

//             <View style={styles.videoStatsContainer}>
//               <Text style={styles.videoChannel}>{channel}</Text>
//               <Text style={styles.videoSeparator}>•</Text>
//               <Text style={styles.videoStats}>{views}</Text>
//               <Text style={styles.videoSeparator}>•</Text>
//               <Text style={styles.videoStats}>{time}</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
// videoContainer:{
//     marginTop:18,
// },
//   videoCard: {
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 220,
//   },
//   videoInfo: {
//     flexDirection: 'row',
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   channelAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   videoText: {
//     flex: 1,
//   },
//   videoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   videoStatsContainer: {
//     flexDirection: 'row',  
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   videoChannel: {
//     fontSize: 14,
//     color: '#606060',
//   },
//   videoStats: {
//     fontSize: 14,
//     color: '#606060',
//   },
//   videoSeparator: {
//     marginHorizontal: 5,
//     fontSize: 14,
//     color: '#606060',
//   },
// });

// export default VideoCard;
