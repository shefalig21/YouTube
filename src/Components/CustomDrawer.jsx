import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  handlePress = (screen) => {
    this.setState({ selectedItem: screen });
    this.props.navigation.navigate(screen);
  };

  render() {
    const { navigation } = this.props;
    const { selectedItem } = this.state;

    return (
      <View style={styles.container} testID="custom-drawer">
        <DrawerContentScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          testID="customDrawer-scroll"
        >
          <View style={styles.header}>
            <Image
              source={require("../assets/images/youtube-icon.png")}
              style={styles.image}
              resizeMode="contain"
              testID="youtube-icon"
            />
          </View>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Trending" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Trending")}
            testID="trending"
          >
            <Icon name="whatshot" size={24} testID="trending-icon"/>
            <Text style={styles.drawerText}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Shopping" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Shopping")}
            testID="shopping"
          >
            <Icon name="shopping-cart" size={24} testID="shopping-icon"/>
            <Text style={styles.drawerText}>Shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Music" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Music")}
            testID="music"
          >
            <Icon name="music-note" size={24} testID="music-icon"/>
            <Text style={styles.drawerText}>Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Films" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Films")}
            testID="films"
          >
            <Icon name="movie" size={24} testID="films-icon" />
            <Text style={styles.drawerText}>Films</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Live" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Live")}
            testID="live"
          >
            <Icon name="radio" size={24} testID="live-icon"/>
            <Text style={styles.drawerText}>Live</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Gaming" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Gaming")}
            testID="gaming"
          >
            <Icon name="sports-esports" size={24} testID="gaming-icon"/>
            <Text style={styles.drawerText}>Gaming</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "News" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("News")}
            testID="news"
          >
            <Icon name="article" size={24} testID="news-icon"/>
            <Text style={styles.drawerText}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Sport" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Sport")}
            testID="sport"
          >
            <Icon name="emoji-events" size={24} testID="sport-icon"/>
            <Text style={styles.drawerText}>Sport</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Courses" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Courses")}
            testID="courses"
          >
            <Icon name="school" size={24} testID="courses-icon"/>
            <Text style={styles.drawerText}>Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "FashionBeauty" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("FashionBeauty")}
            testID="fashion&Beauty"
          >
            <Icon name="checkroom" size={24} testID="fashion&Beauty-icon" />
            <Text style={styles.drawerText}>Fashion & Beauty</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedItem === "Podcast" && styles.selectedItem,
            ]}
            onPress={() => this.handlePress("Podcast")}
            testID="podcast"
            
          >
            <Icon name="mic" size={24} testID="podcast-icon"/>
            <Text style={styles.drawerText}>Podcasts</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={[
              styles.drawerItem1,
              selectedItem === "Premium" && styles.selectedItem,
              testID="youtube=premimum"
            ]}
          >
            <Image
              source={require("../assets/images/logo2.png")}
              style={styles.image1}
              resizeMode="contain"
              testID="youtube-premimum-icon"
            />
            <Text style={styles.drawerText1}>YouTube Premium</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem1,
              selectedItem === "YouTubeMusic" && styles.selectedItem,
            ]}
            testID="youtube-music"
          >
            <Image
              source={require("../assets/images/logo3.jpg")}
              style={styles.image2}
              resizeMode="contain"
              testID="youtube-music-icon"
            />
            <Text style={styles.drawerText}>YouTube Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem1,
              selectedItem === "YouTubeKids" && styles.selectedItem,
            ]}
           testID="youtube-kids"
          >
            <Image
              source={require("../assets/images/logo4.jpg")}
              style={styles.image2}
              resizeMode="contain"
              testID="youtube-kids-icon"
            />
            <Text style={styles.drawerText}>YouTube Kids</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>


        <View style={styles.footer} testID="footer">
          <Text style={styles.footerText}>Privacy Policy • Terms of Service</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: "contain",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 19,
    marginLeft: -11,
  },
  selectedItem: {
    backgroundColor: "#f0f0f0",
  },
  drawerText: {
    fontSize: 16,
    marginLeft: 19,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  drawerItem1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  image1: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginLeft: -25,
  },
  drawerText1: {
    fontSize: 16,
    marginLeft: 4,
  },
  image2: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: -11,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "white",
  },
  footerText: {
    fontSize: 13,
    color: "#666",
  },
});

export default CustomDrawer;












