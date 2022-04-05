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
      ListHeaderComponent={
        <>
          <HStack mt={10} justifyContent="center">
            <Box mr={2} mt={1}>
              <MaterialIcons name="search" color={"#9a53ff"} size={28} />
            </Box>
            <Input
              placeholder="搜尋國北附近美食"
              w={300}
              borderRadius={10}
              borderWidth={2}
            ></Input>
          </HStack>
        </>
      }
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.photo}
    />
  );
};
export default SearchList;
