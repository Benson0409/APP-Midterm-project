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
  Toast,
} from "native-base";
import Starbar from "../components/starbar";
import {
  TouchableOpacity,
  activeOpacity,
  Platform,
  elevation,
} from "react-native";
//5/17
import { useDispatch } from "react-redux";

import { Stores } from "../redux/stores";
import { addLikeStore, removeLikeStore } from "../redux/actions";
const HomeData = ({ Home, navigation }) => {
  //5/17
  // Define a dispatch to send actions

  const {
    name,
    address,
    adr,
    phone,
    time,
    photo,
    star,
    menu,
    url,
    title,
    food1,
    food1des,
    food1img,
    food2,
    food2des,
    food2img,
    food3,
    food3des,
    food3img,
  } = Home;

  const dispatch = useDispatch();
  const [Like, setLike] = useState(false);
  const toggleLike = () => {
    if (Like == false) {
      setLike(true);
      dispatch(addLikeStore(Home));
    } else {
      setLike(false);
      dispatch(removeLikeStore(Home));
    }
  };
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
        shadow={5}
        elevation={6}
        _dark={{ bg: "#485860", borderRadius: 25 }}
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
              opacity={85}
            />
            <Center
              position="absolute"
              style={{ elevation: 3 }}
              marginLeft={220}
              marginTop={3}
            >
              <TouchableOpacity
                onPress={toggleLike}
                // onPress={() => {
                //   setLike(!Like);
                //5/17
                // dispatch(increaseOne());
                // }}
              >
                {Like == true ? (
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
            <Text fontWeight={"bold"} fontSize="20">
              {Home.name}
            </Text>
            <Text
              fontSize="15"
              fontWeight={"bold"}
              _dark={{ color: "white" }}
              _light={{ color: "#3D3D3D" }}
            >
              {Home.address}
            </Text>
            <HStack>
              <Starbar star={Home.star} />
              <Text mt={0.5}>
                {Home.star != null ? (
                  <Text fontSize={15} >
                    {Home.star}.0 <Text _dark={{ color: "white" }}
              _light={{ color: "#3D3D3D" }}>/ 5.0</Text>
                  </Text>
                ) : null}
              </Text>
            </HStack>
          </Box>
          <Pressable
            onPress={() => navigation.navigate("DetailScreen", Home)}
            height={30}
            w={100}
            _dark={{bg:"#7888A0"}}
            _light={{bg:"#463C2E"}}
            borderRadius={25}
            mt={5}
            mr={3}
            alignSelf={"flex-end"}
            shadow={5}
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
