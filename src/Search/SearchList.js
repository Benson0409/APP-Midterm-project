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
      ListHeaderComponent={
        <>
          <HStack mt={10} justifyContent="center">
            <Box mr={2} mt={0.5}>
              <MaterialIcons name="search" color={"#FCAA87"} size={32} />
            </Box>

            <Input
              placeholder="搜尋國北附近美食"
              w={280}
              borderRadius={10}
              borderWidth={2}
              fontSize={"13"}
              bg={"white"}
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
