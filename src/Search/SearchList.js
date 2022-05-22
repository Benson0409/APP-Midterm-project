import React from "react";
import SearchData from "./SearchData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FlatList, SectionList, Text, HStack, Box, Input } from "native-base";
const SearchList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <SearchData Search={item} navigation={navigation} />
  );
  return (
    <FlatList
      h={100}
      borderBottomRadius={20}
      _dark={{ bg: "#3F382E" }}
      _light={{ bg: "#A1917A" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.photo}
    />
  );
};
export default SearchList;
