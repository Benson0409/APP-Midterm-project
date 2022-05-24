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
} from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";
//5/17
// import { useSelector } from "react-redux";
// import { selectLike } from "../redux/likeSlice";
const HomeScreen = ({ navigation }) => {
  //5/17
  // const likeValue = useSelector(selectLike);
  return (
    <ScrollView>
      <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#F6FFF1" }}>
        <Box bg={"#A1917A"} w={"100%"} h={140} borderBottomRadius={20}>
          <Box ml={27} mt={5}>
            <Text color={"white"} fontSize={24} fontWeight={"bold"}>
              歡迎來到國北生活圈
            </Text>

            <HStack>
              <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
                <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>
                  Instagram
                </Text>
              </Pressable>
              <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
                <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>
                  抽獎活動
                </Text>
              </Pressable>
              <Pressable
                height={30}
                w={100}
                bg="#FFFAE1"
                borderRadius={50}
                mt={5}
                mr={3}
              >
                <Text color={"black"} fontSize="14" pt={1} alignSelf={"center"}>
                  加入我們
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </Box>
        <HStack ml={35} mt={5}>
          <MaterialIcons name="fastfood" color={"#DF9879"} size={30} />
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
          <MaterialCommunityIcons name="noodles" color={"#DF9879"} size={30} />
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
          <Entypo name="cake" color={"#DF9879"} size={30} />
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
          <Entypo name="drink" color={"#DF9879"} size={30} />
          <Text fontSize={24} fontWeight={"bold"}>
            {foodData.title4}
          </Text>
        </HStack>
        <HomeList
          key={foodData.title4}
          list={foodData.data4}
          navigation={navigation}
        />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
