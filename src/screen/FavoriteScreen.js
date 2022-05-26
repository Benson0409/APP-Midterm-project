import React, { useState } from "react";
import {
  Box,
  HStack,
  Input,
  AspectRatio,
  Text,
  Image,
  Center,
  VStack,
  Pressable,
  ScrollView,
  FlatList,
} from "native-base";

import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import foodData from "../json/food.json";
import FavoriteList from "../favorite/FavoriteList";
import FavoriteData from "../favorite/FavoriteData";
const FavoriteScreen = ({ navigation }) => {
  const stores = useSelector((state) => state.favStore.stores);
  // const renderItem = ({ item }) => (
  //   <FavoriteData favorite={item} navigation={navigation} />
  // );

  return (
    // <FlatList
    //   data={stores}
    //   renderItem={renderItem}
    //   keyExtractor={(item) => item.name}
    // />
    <Box _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }} h="100%">
      <Box
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
        w={"100%"}
        h={90}
        borderBottomRadius={20}
      >
        <Box>
          {/* <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }} h={"100%"}> */}
          <Box mt={1} alignSelf={"center"}>
            <Text fontSize={30} fontWeight="bold" color={"white"} pt={5}>
              您最愛的商家
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <FavoriteList list={stores} navigation={navigation} />
      </Box>
    </Box>
  );
};

export default FavoriteScreen;
