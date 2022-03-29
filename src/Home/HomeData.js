import React from "react";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Image,
  Pressable,
} from "native-base";
import Starbar from "../star/starabr";
const HomeData = (Home) => {
  return (
    <Box>
      <HStack>
        <Image />
        <Image />
      </HStack>
      <VStack>
        <Image source={{ uri: Home.photo }} />
        <Text>{Home.name}</Text>
        <Text>{address}</Text>
        <starbar>{Home.star}</starbar>
      </VStack>
    </Box>
  );
};

export default HomeData;
