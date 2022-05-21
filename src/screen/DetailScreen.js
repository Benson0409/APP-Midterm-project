import React, { useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import Starbar from "../components/starbar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import SegmentedControlTab from "react-native-segmented-control-tab";

import {
  Center,
  ScrollView,
  Box,
  Text,
  Heading,
  Image,
  Button,
  HStack,
  VStack,
  Pressable,
  TextArea,
  Toast,
  Divider,
  Column,
  Input,
} from "native-base";
import { opacity, red } from "react-native-reanimated/src/reanimated2/Colors";
import { useDispatch, useSelector } from "react-redux";

const DetailScreen = ({ route }) => {
  const {
    star,
    name,
    address,
    phone,
    time,
    photo,
    menu,
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
    comment,
    url,
  } = route.params;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const SegmentedContent = () => {
    if (selectedIndex == 1) {
      return (
        <ScrollView>
          <Center flex={1} _dark={{ bg: "#5E5A54" }} _light={{ bg: "#F6FFF1" }}>
            {/* <Text mt={5}>快來留下評論吧</Text> */}

            <Box bg={"#F6FFF1"} alignSelf={"center"} mt={5}>
              <Box
                borderLeftRadius={20}
                borderRightRadius={20}
                shadowColor={"#000"}
                shadowOpacity={0.25}
                shadowRadius={3.84}
                elevation={8}
                mb={5}
              >
                <HStack>
                  <Box bg={"#FFFAE1"} borderLeftRadius={20}>
                    <Image
                      source={{
                        uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/PeoplePicture1.png?raw=true",
                      }}
                      alt="food"
                      w="100"
                      h="100"
                      borderLeftRadius={20}
                      // mt={2}
                      // ml={2}
                      m={2}
                    />
                  </Box>
                  <Box bg={"#FFFAE1"} w={200} p={2} borderRightRadius={20}>
                    <Text fontSize={20} fontWeight={"bold"}>
                      簡柏松
                    </Text>
                    <Text fontSize={16}>
                      水餃很Q彈而且肉汁味很香，飽滿又大顆，食材味道可以很清楚的表現。
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box bg={"#F6FFF1"} alignSelf={"center"} mt={5}>
              <Box
                borderLeftRadius={20}
                borderRightRadius={20}
                shadowColor={"#000"}
                shadowOpacity={0.25}
                shadowRadius={3.84}
                elevation={8}
                mb={5}
              >
                <HStack>
                  <Box bg={"#FFFAE1"} borderLeftRadius={20}>
                    <Image
                      source={{
                        uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/PeoplePicture2.png?raw=true",
                      }}
                      alt="food"
                      w="100"
                      h="100"
                      borderLeftRadius={20}
                      // mt={2}
                      // ml={2}
                      m={2}
                    />
                  </Box>
                  <Box bg={"#FFFAE1"} w={200} p={2} borderRightRadius={20}>
                    <Text fontSize={20} fontWeight={"bold"}>
                      林毓庭
                    </Text>
                    <Text fontSize={16}>我覺得她很好吃!!!!</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box w={354}>
              <HStack>
                <Box>
                  <Input
                    variant="filled"
                    placeholder="留下您的評論:"
                    fontSize={15}
                    borderRadius={20}
                    mt={5}
                    mb={5}
                    bg={"#FFFAE1"}
                    borderColor={"black"}
                    w={354}
                    letterSpacing={5}
                    // elevation={5}
                  />
                </Box>

                <Box position="absolute" pt={6} pl={310}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="send"
                      color={"#A1917A"}
                      size={30}
                    />
                  </TouchableOpacity>
                </Box>
              </HStack>
            </Box>
          </Center>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView flex={1}>
          <Box bg={"#F6FFF1"} alignSelf={"center"} mt={5}>
            <Box
              borderLeftRadius={20}
              borderRightRadius={20}
              shadowColor={"#000"}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              elevation={8}
              mb={5}
            >
              <HStack>
                <Box bg={"#FFFAE1"} w={200} p={2} borderLeftRadius={20}>
                  <Text fontSize={20} fontWeight={"bold"}>
                    {food1}
                  </Text>
                  <Text fontSize={16}>{food1des}</Text>
                </Box>
                <Image
                  source={{ uri: food1img }}
                  alt="food"
                  w="146"
                  h="146"
                  borderRightRadius={20}
                />
              </HStack>
            </Box>
            <Box
              borderLeftRadius={20}
              borderRightRadius={20}
              shadowColor={"#000"}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              elevation={5}
              mb={5}
            >
              <HStack>
                <Box bg={"#FFFAE1"} w={200} p={2} borderLeftRadius={20}>
                  <Text fontSize={20} fontWeight={"bold"}>
                    {food2}
                  </Text>
                  <Text fontSize={16}>{food2des}</Text>
                </Box>
                <Image
                  source={{ uri: food2img }}
                  alt="food"
                  w="146"
                  h="146"
                  borderRightRadius={20}
                />
              </HStack>
            </Box>

            <Box
              borderLeftRadius={20}
              borderRightRadius={20}
              shadowColor={"#000"}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              elevation={5}
              mb={5}
            >
              <HStack>
                <Box bg={"#FFFAE1"} w={200} p={2} borderLeftRadius={20}>
                  <Text fontSize={20} fontWeight={"bold"}>
                    {food3}
                  </Text>
                  <Text fontSize={16}>{food3des}</Text>
                </Box>
                <Image
                  source={{ uri: food3img }}
                  alt="food"
                  w="146"
                  h="146"
                  borderRightRadius={20}
                />
              </HStack>
            </Box>
          </Box>
        </ScrollView>
      );
    }
  };

  return (
    <ScrollView>
      <Box _dark={{ bg: "#5E5A54" }} _light={{ bg: "#F6FFF1" }}>
        <Image source={{ uri: photo }} alt="store" w="100%" h="300" />
        <Center position="absolute" alignSelf={"center"} mt={250}>
          <Box
            bg={"#FFFAE1"}
            w={300}
            h={100}
            borderRadius={20}
            justifyContent={"center"}
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
          >
            <HStack mt={30} justifyContent="center">
              <Box>
                <Text fontSize={24} color={"black"}>
                  {name}
                </Text>
              </Box>
            </HStack>
            <Box pb={1} alignSelf={"center"}>
              <HStack mb={5}>
                <Starbar star={star} />
                <Text>
                  {star != null ? (
                    <Text color={"black"}>
                      {star}.0 <Text color={"#808080"}>/ 5.0</Text>
                    </Text>
                  ) : null}
                </Text>
              </HStack>
            </Box>
          </Box>
        </Center>
        <Box>
          <HStack ml={8} mb={3} mt={20}>
            <Box >
            <MaterialCommunityIcons name="map-marker" color={"red"} size={25}/>
            </Box>
            <Text ml={2} fontSize={20}>
              {address}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            bg={"#A1917A"}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <Entypo name="old-phone" color={"#463C2E"} size={25} />
            <Text ml={3} fontSize={20}>
              {phone}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            bg={"#A1917A"}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <AntDesign name="rest" color={"#463C2E"} size={25} />
            <Text ml={3} fontSize={20}>
              {time}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            bg={"#A1917A"}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <MaterialIcons name="restaurant-menu" color={"#463C2E"} size={25} />
            <Pressable onPress={() => Linking.openURL(url)}>
              <Text ml={3} fontSize={20}>
                {menu}
              </Text>
            </Pressable>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            bg={"#A1917A"}
          ></Divider>
        </Box>
        <SegmentedControlTab
          values={["人氣推薦", "評論區"]}
          tabStyle={{
            marginTop: 30,
            borderColor: "gray",
            borderWidth: 1,
            backgroundColor: "#FFFAE1",
          }}
          firstTabStyle={{ marginLeft: 40 }}
          lastTabStyle={{ marginRight: 40 }}
          tabTextStyle={{
            fontSize: 16,
            padding: 1,
            color: "black",
          }}
          activeTabStyle={{
            backgroundColor: "#3F382E",
          }}
          activeTabTextStyle={{ color: "white" }}
          selectedIndex={selectedIndex}
          onTabPress={(index) => setSelectedIndex(index)}
        />

        <SegmentedContent />
      </Box>
    </ScrollView>
  );
};
export default DetailScreen;
