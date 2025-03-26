import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ''};
  }

  handleSearch= (text) => {
    this.setState({ searchText: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchHeader}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={24} style={styles.icon} />
          </TouchableOpacity>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Search YouTube"
            placeholderTextColor="#888"
            value={this.state.searchText}
            onChangeText={this.handleSearch}
          />
          
          <TouchableOpacity>
            <Icon name="mic" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>

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
});

export default SearchScreen;



































// import React, { Component } from 'react';
// import { View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// class SearchScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {searchText: ''};
//   }

//   handleSearch= (text) => {
//     this.setState({ searchText: text });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.searchHeader}>
//           <TouchableOpacity>
//             <Icon name="arrow-back" size={24} style={styles.icon} />
//           </TouchableOpacity>
          
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search YouTube"
//             placeholderTextColor="#888"
//             value={this.state.searchText}
//             onChangeText={this.handleSearch}
//           />
          
//           <TouchableOpacity>
//             <Icon name="mic" size={24} style={styles.icon} />
//           </TouchableOpacity>
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   searchHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   icon: {
//     padding: 5,
//   },
// });

// export default SearchScreen;