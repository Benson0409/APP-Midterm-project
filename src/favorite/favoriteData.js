import React, { useState } from "react";
import {
  Box,
  HStack,
  Input,
  AspectRatio,
  Text,
  Image,
  Center,
  VStack,
  Pressable,
  ScrollView,
  FlatList,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

//import Icons
import IonIcons from "react-native-vector-icons/Ionicons";

//react-redux
import { useDispatch } from "react-redux";
import { Stores } from "../redux/stores";

//import add favorite action
import { removeLikeStore } from "../redux/actions";

const FavoriteData = ({ favorite, navigation }) => {
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
  } = favorite;
  const dispatch = useDispatch();

  const [Like, setLike] = useState(true);
  const removeLike = () => {
    setLike(false);
    dispatch(removeLikeStore(favorite));
  };

  return (
    <Box>
      <Pressable
        onPress={() => navigation.navigate("DetailScreen", favorite)}
        mt={5}
      >
        <Box
          h={82}
          w={369}
          _dark={{ bg: "#485860" }}
          _light={{ bg: "#FFFAE1" }}
          alignSelf={"center"}
          borderRadius={20}
          shadow={5}
        >
          <HStack>
            <Box>
              <Image
                source={{
                  uri: favorite.photo,
                }}
                alt="store"
                // borderTopRadius={25}
                w="107"
                h="82"
                opacity={85}
                borderLeftRadius={20}
              />
            </Box>
            <VStack>
              <HStack justifyContent="space-between">
                <Text fontWeight={"bold"} fontSize={20} pl={2} mt={2}>
                  {favorite.name}
                </Text>
                <Pressable onPress={removeLike}>
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
                </Pressable>
              </HStack>

              <Text
                fontSize={14}
                fontWeight={400}
                _dark={{ color: "white" }}
                _light={{ color: "#505050" }}
                pl={2}
                mt={3}
              >
                {favorite.adr}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};
export default FavoriteData;
