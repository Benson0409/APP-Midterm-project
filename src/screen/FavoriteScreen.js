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
      <Box bg={"#A1917A"} w={"100%"} h={100} borderBottomRadius={20}>
        <Box ml={27} mt={5}>
          {/* <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }} h={"100%"}> */}
          <Box mt={1} alignSelf={"center"}>
            <Text fontSize={30} fontWeight="bold" color={"white"} pt={5}>
              您最愛的商家
            </Text>
          </Box>
        </Box>
      </Box>
      <Pressable mt={10}>
        <Box
          h={82}
          w={369}
          _dark={{ bg: "#3F382E" }}
          _light={{ bg: "#F6FFF1" }}
          alignSelf={"center"}
          borderRadius={20}
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
              <Text fontWeight={700} fontSize={20} pl={2} mt={2}>
                Mama’s 鐵鍋早午餐{" "}
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={25}
                />
              </Text>
              <Text
                fontSize={14}
                fontWeight={400}
                color={"#505050"}
                pl={2}
                mt={3}
              >
                台北市和平東路二段331巷43弄42號
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>

      <Pressable mt={10}>
        <Box
          h={82}
          w={369}
          _dark={{ bg: "#3F382E" }}
          _light={{ bg: "#F6FFF1" }}
          alignSelf={"center"}
          borderRadius={20}
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
              <Text fontWeight={700} fontSize={20} pl={2} mt={2}>
                真芳炭烤土司{" "}
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={25}
                />
              </Text>
              <Text
                fontSize={14}
                fontWeight={400}
                color={"#505050"}
                pl={2}
                mt={3}
              >
                台北市大安區和平東路二段209號106
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
    </ScrollView>
  );
};

export default FavoriteScreen;
