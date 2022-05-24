import React from "react";
import HomeData from "./HomeData";
import {
  Box,
  FlatList,
  SectionList,
  Text,
  VStack,
  HStack,
  Pressable,
  AspectRatio,
  Image,
  ScrollView,
  Button,
  Center,
} from "native-base";

import { TouchableOpacity, Linking } from "react-native";
const HomeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <HomeData Home={item} navigation={navigation} />
  );
  return (
    <FlatList
      horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={(list) => list.photo}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default HomeList;
