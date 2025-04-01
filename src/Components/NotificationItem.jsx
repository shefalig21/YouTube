import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
    render() {
        const { thumbnail, title, channel, time } = this.props;

        return (
            <View style={styles.notificationItem} testID="notification-item">
                <View style={styles.notificationContent}>
             
                    <Image
                        source={require('../assets/images/panda.png')}
                        style={styles.avatar}
                        testID="notification-avatar"
                        />

                    <View style={styles.rightSide}>
                        <Text style={styles.channel} testID="notification-channel">{channel}</Text>
                        <Text style={styles.title} numberOfLines={3} testID="notification-title">{title}</Text>
                        <Text style={styles.time} testID="notification-time">{time}</Text>
                    </View>

                    <View style={styles.videoContainer}>
                        <Video
                            source={{ uri: thumbnail }}
                            style={styles.videoPlayer}
                            controls
                            resizeMode="contain"
                            paused={true}
                            testID="notification-video"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

NotificationItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    notificationItem: {
        flexDirection: 'row',
        marginBottom: 12,
        padding: 10,
        backgroundColor: '#fff', 
        borderRadius: 8,
        alignItems: 'center',
    },
    notificationContent: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    rightSide: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    videoContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    videoPlayer: {
        width: 120,
        height: 70,
        borderRadius: 10,
        marginLeft: 10, 
    },
    channel: {
        fontWeight: 'bold',
    },
    title: {
        color: '#555',
        marginVertical: 5,
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
});

export default NotificationItem;