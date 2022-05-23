import React from "react";
import {
  Box,
  VStack,
  Pressable,
  Text,
  AspectRatio,
  Image,
  HStack,
  ScrollView,
  Linking,
} from "native-base";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import foodData from "../json/food.json";
const Starbar = (props) => {
  if (props.star == 1) {
    return (
      <Box flexDirection={"row"} mr={3} >
        <FontAwesome5 name="fish" color={"#4BC5BD"} size={25} />
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </Box>
    );
  } else if (props.star == 2) {
    return (
      <Box flexDirection={"row"} mr={3}>
        <Box mr={0.5} >
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#gray"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#gray"} size={25} />
        </Box>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </Box>
    );
  } else if (props.star == 3) {
    return (
      <Box flexDirection={"row"} mr={3}>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"gray"} size={25} />
        </Box>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </Box>
    );
  } else if (props.star == 4) {
    return (
      <Box flexDirection={"row"} mr={3}>
        <Box mr={0.5} >
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <FontAwesome5 name="fish" color={"gray"} size={25}/>
      </Box>
    );
  } else if (props.star == 5) {
    return (
      <Box flexDirection={"row"} mr={3}>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <Box mr={0.5}>
        <FontAwesome5 name="fish"  color={"#4BC5BD"} size={25} />
        </Box>
        <FontAwesome5 name="fish" color={"#4BC5BD"} size={25} />
      </Box>
    );
  } else {
    return null;
  }
};

// const styles = StyleSheet.create({
//   starFlex: {
//     flexDirection: "row",
//     marginRight:5,
//   },
// });

export default Starbar;
