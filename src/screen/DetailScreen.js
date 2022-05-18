import React, { useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import Starbar from "../star/starabr";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import SegmentedControlTab from "react-native-segmented-control-tab";
import {
  Center,
  ScrollView,
  Box,
  AspectRatio,
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
  SimpleGrid,
} from "native-base";
import { opacity } from "react-native-reanimated/src/reanimated2/Colors";
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
        <Center
          flex={1}
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
        >
          <Text>This is an Advanced Account Setting Page</Text>
        </Center>
      );
    } else {
      return (
        <ScrollView flex={1}>
          <Center>
            <Box
              // w={354}
              // h={156}
              m={5}
              _dark={{ bg: "#5E5A54" }}
              _light={{ bg: "#F6FFF1" }}
              elevation={5}
              flex={1}
            >
              <HStack>
                <Box bg={"#FFFAE1"} w={"62%"}>
                  <VStack m={1}>
                    <Box>
                      <Text fontSize={20} fontWeight={700}>
                        {food1}
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize={16} fontWeight={400}>
                        {food1des}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
                <Box w={"38%"}>
                  {/* <Text>{food1des}</Text> */}
                  <Image
                    source={{ uri: food1img }}
                    alt="food"
                    w="142"
                    h="142"
                    resizeMode="cover"
                    // borderBottomRightRadius={20}
                    // borderTopRightRadius={20}
                  />
                </Box>
              </HStack>
            </Box>
          </Center>
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
            {...(Platform.OS == "ios"
              ? (shadowOffset = {
                  width: 6,
                  height: 6,
                })
              : null)}
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
            <MaterialCommunityIcons name="map-marker" color={"red"} size={25} />
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
            <Entypo name="old-phone" color={"#1CDA3A"} size={25} />
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
            <AntDesign name="rest" color={"#DAA51C"} size={25} />
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
            <MaterialIcons name="restaurant-menu" color={"#A447C5"} size={25} />
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
            marginTop: 10,
            borderColor: "gray",
            borderWidth: 1,
            backgroundColor: "#3F382E",
          }}
          firstTabStyle={{ marginLeft: 40 }}
          lastTabStyle={{ marginRight: 40 }}
          tabTextStyle={{
            fontSize: 16,
            padding: 1,
            color: "#fff",
          }}
          activeTabStyle={{
            backgroundColor: "#FFFAE1",
          }}
          activeTabTextStyle={{ color: "#151520" }}
          selectedIndex={selectedIndex}
          onTabPress={(index) => setSelectedIndex(index)}
        />

        <SegmentedContent />
      </Box>
    </ScrollView>
  );
};
export default DetailScreen;
