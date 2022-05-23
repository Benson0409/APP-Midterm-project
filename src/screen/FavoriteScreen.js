import React from "react";
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
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import favoriteList from "../favorite/favoriteList";
import foodData from "../json/food.json";

const FavoriteScreen = ({ navigation }) => {
  return (
    <ScrollView>
     <Box _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }} h={800}>
      <Box  _dark={{ bg: "#1C3851" }} _light={{ bg: "#A1917A" }} w={"100%"} h={100} borderBottomRadius={20} shadow={5}>
          <Box mt={8} alignSelf={"center"}>
            <Text fontSize={30} fontWeight="bold" color={"white"} >
              您最愛的商家
            </Text>
          </Box>
      </Box>
      <Pressable mt={5}>
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
                  uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/Mama鐵鍋早午餐.jpg?raw=true",
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
              <Text fontWeight={"bold"} fontSize={20} pl={2} mt={2}>
                Mama’s 鐵鍋早午餐
              </Text>
              <Text
                fontSize={14}
                fontWeight={400}
                _dark={{ color: "white" }}
                _light={{ color: "#505050" }}
                pl={2}
                mt={3}
              >
                台北市和平東路二段331巷43弄42號
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>

      <Pressable mt={5}>
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
                  uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/真芳.jpg?raw=true",
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
              <Text fontWeight={"bold"} fontSize={20} pl={2} mt={2}>
              真芳炭烤土司
              </Text>
              <Text
                fontSize={14}
                fontWeight={400}
                _dark={{ color: "white" }}
                _light={{ color: "#505050" }}
                pl={2}
                mt={3}
              >
                台北市大安區和平東路二段209號106
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
      <Pressable mt={5}>
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
                  uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/%E8%BE%9B%E5%B7%9D%E5%B1%8B.jpg?raw=true",
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
              <Text fontWeight={"bold"} fontSize={20} pl={2} mt={2}>
              辛川屋
              </Text>
              <Text
                fontSize={14}
                fontWeight={400}
                _dark={{ color: "white" }}
                _light={{ color: "#505050" }}
                pl={2}
                mt={3}
              >
                台北市和平東路二段331號
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
      {/* <Image
        source={{
          uri: "https://raw.githubusercontent.com/Benson0409/APP-Midterm-project/master/img/%E7%84%A1%E8%83%8C%E6%99%AF%E7%86%8A.png",
        }}
        width={210}
        height={220}
        opacity={60}
        alignSelf={"center"}
        mt={"50%"}
        alt="沒有收藏"
      />
      <Text alignSelf={"center"} fontSize={20} color={"#989898"}>
        尚未收藏
      </Text> */}
      </Box>
    </ScrollView>
  );
};

export default FavoriteScreen;
