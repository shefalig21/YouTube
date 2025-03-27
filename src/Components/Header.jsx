// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export class Header extends Component {
//   handleSearch=()=>{
//     this.props.navigation.navigate("SearchScreen");
//   }

//   render() {
//     return (
//       <View style={styles.headerContainer}> 

//         <TouchableOpacity style={styles.leftIcons}>
//           <Image 
//             source={require('../assets/images/youtube-icon.png')}
//             style={styles.image} 
//             resizeMode="contain"
//             testID="youtube-icon"
//           />
//         </TouchableOpacity>

//         <View style={styles.rightIcons}>
//           <TouchableOpacity style={styles.iconSpacing}>
//             <Icon name="cast" size={24} color="black" testID="cast-icon" /> 
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing}>
//             <Icon name="notifications-none" size={25} color="black" testID="notification-icon"/>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing} onPress={this.handleSearch} testID='searchClick'>
//             <Icon name="search" size={25} color="black" testID="search-icon"/>
//           </TouchableOpacity>
//         </View>

//       </View>
//     );
//   }
// }

// export default Header;

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//     height: 60,
//   },
//   leftIcons: {
//     padding: 8,  
//     marginLeft: -15,
//   },
//   image: {
//     width: 100, 
//     height: 90, 
//     resizeMode: "contain",
//   },
//   rightIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconSpacing: {
//     marginLeft: 20,
//   },
  
// });











import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import withNavigationHOC from '../utils/withNavigationHOC';

class Header extends Component {
  handleSearch = () => {
    this.props.navigation.navigate("SearchScreen"); 
  };

  render() {
    return (
      <View style={styles.headerContainer} testID="header-component"> 

        <TouchableOpacity style={styles.leftIcons}>
          <Image 
            source={require('../assets/images/youtube-icon.png')}
            style={styles.image} 
            resizeMode="contain"
            testID="youtube-icon"
          />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="cast" size={24} color="black" testID="cast-icon" /> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="notifications-none" size={25} color="black" testID="notification-icon"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconSpacing} onPress={this.handleSearch} testID='searchClick'>
            <Icon name="search" size={25} color="black" testID="search-icon"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default withNavigationHOC(Header);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 60,
  },
  leftIcons: {
    padding: 8,  
    marginLeft: -15,
  },
  image: {
    width: 100, 
    height: 90, 
    resizeMode: "contain",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 20,
  },
});











// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export class Header extends Component {
//   handleSearch=()=>{
//     this.props.navigation.navigate("SearchScreen");

//   }

//   render() {
//     return (
//       <View style={styles.headerContainer}> 

//         <TouchableOpacity style={styles.leftIcons} testID="youtube-icon">
//           <Image 
//             source={require('../assets/images/youtube-icon.png')}
//             style={styles.image} 
//             resizeMode="contain"
//           />
//         </TouchableOpacity>

//         <View style={styles.rightIcons}>
//           <TouchableOpacity style={styles.iconSpacing} testID="cast-icon">
//             <Icon name="cast" size={24} color="black" /> 
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing} testID="notification-icon">
//             <Icon name="notifications-none" size={25} color="black" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing} testID="search-icon" onPress={this.handleSearch}>
//             <Icon name="search" size={25} color="black" />
//           </TouchableOpacity>
//         </View>

//       </View>
//     );
//   }
// }

// export default Header;

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//     height: 60,
//   },
//   leftIcons: {
//     padding: 8,  
//     marginLeft: -15,
//   },
//   image: {
//     width: 100, 
//     height: 90, 
//     resizeMode: "contain",
//   },
//   rightIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconSpacing: {
//     marginLeft: 20,
//   },
  
// });











// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export class Header extends Component {
//   render() {
//     return (
//       <View style={styles.headerContainer}> 

//         <TouchableOpacity style={styles.leftIcons}>
//           <Image 
//             source={require('../../assets/images/youtube-icon.png')} 
//             style={styles.image} 
//             resizeMode="contain"
//           />
//         </TouchableOpacity>

//         <View style={styles.rightIcons}>
//           <TouchableOpacity style={styles.iconSpacing}>
//             <Icon name="cast" size={24} color="black" /> 
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing}>
//             <Icon name="notifications-none" size={25} color="black" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconSpacing}>
//             <Icon name="search" size={25} color="black" />
//           </TouchableOpacity>
//         </View>
        
//       </View>
//     );
//   }
// }

// export default Header;