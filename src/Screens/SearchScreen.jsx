import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import videos from '../Data/videos';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  handleSearchResults = () => {
    const { searchText } = this.state;
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // if (!searchText) return null;
    return (
      <View testID="search-render">
        <FlatList
          data={filteredVideos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Icon name="history" size={24} style={styles.historyIcon} />
              <Text style={styles.historyText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" size={24} style={styles.icon} testID="back-icon" />
          </TouchableOpacity>

          <TextInput
            testID="search-input"
            style={styles.searchInput}
            placeholder="Search YouTube"
            placeholderTextColor="#888"
            value={this.state.searchText}
            onChangeText={this.handleSearch} />

          <TouchableOpacity>
            <Icon name="mic" size={24} style={styles.icon} testID="mic-icon" />
          </TouchableOpacity>
        </View>
        {this.handleSearchResults()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    padding: 5,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  historyIcon: {
    marginRight: 14,
    color: 'black',
  },
  historyText: {
    fontSize: 16,
  },
});

export default SearchScreen;




























