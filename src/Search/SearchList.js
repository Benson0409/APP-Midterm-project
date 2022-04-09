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
      _dark={{ bg: "#3F382E" }}
      _light={{ bg: "#FFFAE1" }}
      ListHeaderComponent={
        <>
          <HStack mt={10} justifyContent="center">
            <Box mr={2} mt={1}>
              <MaterialIcons name="search" color={"black"} size={28} />
            </Box>
            <Input
              placeholder="搜尋國北附近美食"
              w={300}
              borderRadius={10}
              borderWidth={2}
              bg={"white"}
              fontSize={"13"}
            ></Input>
          </HStack>
          <Box mt={5} ml={8}>
            <Text fontSize={20} fontWeight="bold">所有類別</Text>
          </Box>
        </>
      }
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.photo}
    />
  );
};
export default SearchList;
