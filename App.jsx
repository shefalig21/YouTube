import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Header from './src/Components/Header';
import LandingScreen from './src/Screens/LandingScreen';
import SearchScreen from './src/Screens/SearchScreen';
import BottomTabNav from './src/Navigation/BottomTabNav';
import SubHeader from './src/Components/SubHeader';
import VideoCard from './src/Components/VideoCard';


export class App extends Component {
  render() {
    return (
     <View style={styles.container}>
     {/* <ButtonComp/> */}
       <Header/>
       {/* <LandingScreen/> */}
       {/* <SubHeader/> */}
       {/* <SearchScreen/> */}
       {/* <Footer/> */}
       {/* <BottomTabNav/> */}
       {/* <VideoCard/> */}
     

     </View>
    )
  }
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})