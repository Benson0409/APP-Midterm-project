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
      ListHeaderComponent={
        <Box
          _dark={{ bg: "#1C3851" }}
          _light={{ bg: "#A1917A" }}
          w={"100%"}
          h={100}
          borderBottomRadius={20}
        >
          <Box ml={27} mt={5}>
            {/* <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }} h={"100%"}> */}
            <Box mt={1} alignSelf={"center"}>
              <Text fontSize={30} fontWeight="bold" color={"white"} pt={5}>
                您最愛的商家
              </Text>
            </Box>
          </Box>
        </Box>
      }
      data={list}
      renderItem={renderItem}
      keyExtractor={(list) => list.photo}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default FavoriteList;
