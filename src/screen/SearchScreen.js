import React from "react";
import {
  Box,
  HStack,
  Input,
  AspectRatio,
  VStack,
  Divider,
  Heading,
  Icon,
} from "native-base";
import foodData from "../json/food.json";
import SearchList from "../Search/SearchList";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native-svg";

const SearchScreen = ({ navigation }) => {
  return (
    <Box _light={{ bg: "#A1917A" }} h={100} borderBottomRadius={20}>
      <Box alignSelf={"center"} mt={8}>
        <Input
          placeholder="搜尋國北附近美食"
          width="80%"
          borderRadius="20"
          py="3"
          px="1"
          // bg={"white"}
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="black"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default SearchScreen;
