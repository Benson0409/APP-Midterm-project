import React from "react";
import FavoriteData from "./FavoriteData";
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
const FavoriteList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <FavoriteData favorite={item} navigation={navigation} />
  );
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(list) => list.photo}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default FavoriteList;
