import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Box,
  VStack,
  Pressable,
  Text,
  AspectRatio,
  Image,
  HStack,
  ScrollView,
  Linking,
  NativeBaseProvider,
  StatusBar,
  useColorMode,
} from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";
//5/17
// import { useSelector } from "react-redux";
// import { selectLike } from "../redux/likeSlice";
const HomeScreen = ({ navigation }) => {
  //5/17
  // const likeValue = useSelector(selectLike);
  const { colorMode } = useColorMode();
  return (
    <ScrollView alwaysBounceVertical="false" _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }}>
      
        <Box
          _dark={{ bg: "#1C3851" }}
          _light={{ bg: "#A1917A" }}
          w={"100%"}
          h={120}
          borderBottomRadius={20}
          shadow={5}
        >
          <Box ml={27} mt={5}>
            <Text color={"white"} fontSize={24} fontWeight={"bold"}>
              歡迎來到國北生活圈
            </Text>

            <HStack>
              <Pressable
                height={30}
                w={100}
                _dark={{ bg: "#7888A0" }}
                _light={{ bg: "#FFFAE1" }}
                borderRadius={50}
                mt={4}
                mr={3}
                shadow={5}
              >
                <Text
                  _dark={{ color: "white" }}
                  _light={{ color: "black" }}
                  fontSize="14"
                  pt={1}
                  alignSelf={"center"}
                >
                  Instagram
                </Text>
              </Pressable>
              <Pressable
                height={30}
                w={100}
                _dark={{ bg: "#7888A0" }}
                _light={{ bg: "#FFFAE1" }}
                borderRadius={50}
                mt={4}
                mr={3}
                shadow={5}
              >
                <Text
                  _dark={{ color: "white" }}
                  _light={{ color: "black" }}
                  fontSize="14"
                  pt={1}
                  alignSelf={"center"}
                >
                  抽獎活動
                </Text>
              </Pressable>
              <Pressable
                height={30}
                w={100}
                _dark={{ bg: "#7888A0" }}
                _light={{ bg: "#FFFAE1" }}
                borderRadius={50}
                mt={4}
                mr={3}
                shadow={5}
              >
                <Text
                  _dark={{ color: "white" }}
                  _light={{ color: "black" }}
                  fontSize="14"
                  pt={1}
                  alignSelf={"center"}
                >
                  加入我們
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </Box>
        <HStack ml={35} mt={5}>
          <MaterialIcons
            name="fastfood"
            color={colorMode == "light" ? "#FCAA87" : "#FFE3B3"}
            size={30}
          />
          <Text fontSize={24} fontWeight={"bold"}>
            {foodData.title1}
          </Text>
        </HStack>
        <HomeList
          key={foodData.title1}
          list={foodData.data1}
          navigation={navigation}
        />

        <HStack ml={35} mt={5}>
          <MaterialCommunityIcons
            name="noodles"
            color={colorMode == "light" ? "#FCAA87" : "#FFE3B3"}
            size={30}
          />
          <Text fontSize={24} fontWeight={"bold"}>
            {foodData.title2}
            {/* 5/17 */}
            {/* <Text>{likeValue}</Text> */}
          </Text>
        </HStack>
        <HomeList
          key={foodData.title2}
          list={foodData.data2}
          navigation={navigation}
        />

        <HStack ml={35} mt={5}>
          <Entypo
            name="cake"
            color={colorMode == "light" ? "#FCAA87" : "#FFE3B3"}
            size={30}
          />
          <Text fontSize={24} fontWeight={"bold"}>
            {foodData.title3}
          </Text>
        </HStack>
        <HomeList
          key={foodData.title3}
          list={foodData.data3}
          navigation={navigation}
        />

        <HStack ml={35} mt={5}>
          <Entypo
            name="drink"
            color={colorMode == "light" ? "#FCAA87" : "#FFE3B3"}
            size={30}
          />
          <Text fontSize={24} fontWeight={"bold"}>
            {foodData.title4}
          </Text>
        </HStack>
        <HomeList
          key={foodData.title4}
          list={foodData.data4}
          navigation={navigation}
        />
      
    </ScrollView>
  );
};

export default HomeScreen;
