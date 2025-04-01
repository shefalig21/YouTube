import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList } from 'react-native';
import NotificationHeader from '../Components/NotificationHeader';
import NotificationItem from '../Components/NotificationItem';
import videos from '../Data/videos';

export class Notification extends Component {
    render() {
        return (
            <View style={styles.container} testID="notification-screen">

                <NotificationHeader navigation={this.props.navigation} 
                testID="notification-header"
                />

                <FlatList
                    testID="notification-list"
                    data={videos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <NotificationItem
                         testID={`notification-item-${item.id}`}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            channel={item.channel}
                            views={item.views}
                        />
                    )}
                />

            </View>
        );
    }
}

Notification.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Notification;
