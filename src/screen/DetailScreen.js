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
  Pressable,
  TextArea,
  Toast,
  Divider,
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
        <Center
          flex={1}
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
        >
          <Text>This is a General Account Setting Page</Text>
        </Center>
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
            backgroundColor: "white",
          }}
          firstTabStyle={{ marginLeft: 20 }}
          lastTabStyle={{ marginRight: 20 }}
          tabTextStyle={{
            fontSize: 16,
            padding: 5,
            color: "gray",
          }}
          activeTabStyle={{
            backgroundColor: "gray",
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
