import React from "react";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Image,
  Pressable,
  Input,
  Heading,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Starbar from "../star/starabr";
const SearchData = ({ Search, navigation }) => {
  return (
    <Box bg={"white"}>
      {/* <HStack mt={10} justifyContent="center">
        <Box mt={3} mr={2}>
          <MaterialIcons name="search" color={"black"} size={25} />
        </Box>
        <Input
          placeholder="搜尋國北附近美食"
          w={300}
          borderRadius={10}
          borderWidth={2}
        ></Input>
      </HStack> */}
      <Box mb={5}>
        <VStack alignSelf="center">
          <Pressable onPress={() => Linking.openURL(url)}>
            <AspectRatio mt={3} w="320" h="200">
              <Image
                source={{ uri: Search.photo }}
                alt="store"
                borderRadius={10}
              />
            </AspectRatio>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default SearchData;
