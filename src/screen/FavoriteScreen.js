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
      <FavoriteList list={stores} navigation={navigation} />
    </Box>
  );
};

export default FavoriteScreen;
