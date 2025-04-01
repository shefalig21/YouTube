import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NotificationHeader from '../Components/NotificationHeader';
import NotificationItem from '../Components/NotificationItem';
import videos from '../Data/videos';

export class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>

                <NotificationHeader navigation={this.props.navigation} />

                <FlatList
                    testID="notification-list"
                    data={videos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <NotificationItem
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Notification;
