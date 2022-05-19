import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Linking,
} from "react-native";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import foodData from "../json/food.json";
const Starbar = (props) => {
  if (props.star == 1) {
    return (
      <View style={styles.starFlex}>
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </View>
    );
  } else if (props.star == 2) {
    return (
      <View style={styles.starFlex}>
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </View>
    );
  } else if (props.star == 3) {
    return (
      <View style={styles.starFlex}>
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </View>
    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starFlex}>
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starFlex}>
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
        <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  starFlex: {
    flexDirection: "row",
    marginRight:5,
  },
});

export default Starbar;
