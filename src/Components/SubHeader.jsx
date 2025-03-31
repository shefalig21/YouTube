import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import withNavigationHOC from '../utils/withNavigationHOC';

export class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
    };
  }
  handleCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const categories = ['All', 'News', 'Gaming', 'Comedy', 'Music', 'Web Series', 'Coding',
      'Mixes', 'Web Development', 'Fashion', 'Destinations', 'Data Structures', 'Asian Music'];
    return (
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.subHeader}
        testID="subHeaderScrollView">

        <View style={styles.subContent} testID="sub-header">
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}
            testID="explore-button"
            >
          <Icon name="explore" size={20} color="black" style={styles.icon} testID="explore-icon" />
          </TouchableOpacity>

          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.innerContent,
                this.state.selectedCategory === category ? styles.selected : {}
              ]}
              onPress={() => this.handleCategory(category)}
              testID={`category-button-${category}`}>
              <Text
                style={
                  this.state.selectedCategory === category ? styles.selectedText :
                    styles.text
                }
                testID={`category-text-${category}`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default withNavigationHOC(SubHeader)

const styles = StyleSheet.create({
  subHeader: {
    marginTop: 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon:{
    marginRight: 10,
    backgroundColor: '#e0e0e0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 7,

  },
  innerContent: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginRight: 8,
  },
  selected: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  selectedText: {
    fontSize: 14,
    color: 'white',
  },
});













