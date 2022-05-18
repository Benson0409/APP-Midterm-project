import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Pressable,
  Image,
  Center,
} from "native-base";
import Starbar from "../star/starabr";
import {
  TouchableOpacity,
  activeOpacity,
  Platform,
  elevation,
} from "react-native";
//5/17
import { useDispatch } from "react-redux";
import { increaseOne, decreaseOne } from "../redux/likeSlice";

const HomeData = ({ Home, navigation }) => {
  //5/17
  // Define a dispatch to send actions
  // const dispatch = useDispatch();
  const [Like, setLike] = useState(false);
  return (
    <Box mx="auto" mb="8" mt={5} ml={8} mr={3}>
      <VStack
        shadowColor={"#000"}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        // {...(Platform.OS == "ios"
        //   ? (shadowOffset = {
        //       width: 6,
        //       height: 6,
        //     })
        //   : null)}
        elevation={6}
        _dark={{ bg: "#3F382E", borderRadius: 25 }}
        _light={{ bg: "#FFFAE1", borderRadius: 25 }}
      >
        <Box w={260} h={350} mb={3}>
          <Box>
            <Image
              source={{ uri: Home.photo }}
              alt="store"
              borderTopRadius={25}
              w="260"
              h="192"
              opacity={80}
            />
            <Center
              position="absolute"
              style={{ elevation: 3 }}
              marginLeft={220}
              marginTop={3}
            >
              <TouchableOpacity
                onPress={() => {
                  setLike(!Like);
                  //5/17
                  // dispatch(increaseOne());
                }}
              >
                {Like ? (
                  <MaterialCommunityIcons
                    name="cards-heart"
                    color={"#FF0C0C"}
                    size={30}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={"white"}
                    size={30}
                  />
                )}
              </TouchableOpacity>
            </Center>
          </Box>
          <Box ml={3} mt={3} mr={2}>
            <Text fontWeight="bold" fontSize="20">
              {Home.name}
            </Text>
            <Text
              fontSize="15"
              _dark={{ color: "white" }}
              _light={{ color: "#3D3D3D" }}
            >
              {Home.address}
            </Text>
            <HStack>
              <Starbar star={Home.star} />
              <Text>
                {Home.star != null ? (
                  <Text fontSize={18}>
                    {Home.star}.0 <Text color={"#808080"}>/ 5.0</Text>
                  </Text>
                ) : null}
              </Text>
            </HStack>
          </Box>
          <Pressable
            onPress={() => navigation.navigate("DetailScreen", Home)}
            height={30}
            w={100}
            bg="#5B5449"
            borderRadius={25}
            mt={5}
            mr={3}
            alignSelf={"flex-end"}
          >
            <Text color={"white"} fontSize="14" pt={1} alignSelf={"center"}>
              詳細資訊
            </Text>
          </Pressable>
        </Box>
      </VStack>
    </Box>
  );
};

export default HomeData;
