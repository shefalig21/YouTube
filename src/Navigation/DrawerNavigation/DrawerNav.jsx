import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../Components/CustomDrawer";
import Trending from "./Trending";
import Shopping from "./Shopping";
import Music from "./Music";
import Films from "./Films";
import Live from "./Live";
import Gaming from "./Gaming";
import News from "./News";
import Sport from "./Sport";
import Courses from "./Courses";
import FashionBeauty from "./FashionBeauty";
import Podcast from "./Podcast";
import BottomTabNav from "../BottomTabNavigation/BottomTabNav";

const Drawer = createDrawerNavigator();

class DrawerNav extends Component {
  render() {
    return (
      <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} testID="custom-drawer" />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 290 },
      }}
    >
        <Drawer.Screen name="Home" component={BottomTabNav} />
        <Drawer.Screen name="Trending" component={Trending} />
        <Drawer.Screen name="Shopping" component={Shopping} />
        <Drawer.Screen name="Music" component={Music} />
        <Drawer.Screen name="Films" component={Films}/>
        <Drawer.Screen name="Live" component={Live} />
        <Drawer.Screen name="Gaming" component={Gaming} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Sport" component={Sport} />
        <Drawer.Screen name="Courses" component={Courses} />
        <Drawer.Screen name="FashionBeauty" component={FashionBeauty} />
        <Drawer.Screen name="Podcasts" component={Podcast} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNav;














