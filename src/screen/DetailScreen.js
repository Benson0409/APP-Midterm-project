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
          <Center flex={1} _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }}>
            {/* <Text mt={5}>快來留下評論吧</Text> */}

            <Box _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }} alignSelf={"center"} mt={5}>
              <Box
                borderLeftRadius={20}
                borderRightRadius={20}
                shadowColor={"#000"}
                shadowOpacity={0.25}
                shadowRadius={3.84}
                shadow={5}
                elevation={8}
                mb={5}
                
              >
                <HStack>
                  <Box _dark={{ bg: "#485860" }} _light={{ bg: "#FFFAE1" }} borderLeftRadius={20}>
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
                  <Box _dark={{ bg: "#485860" }} _light={{ bg: "#FFFAE1" }} w={200} p={2} borderRightRadius={20}>
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
            <Box  _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }} alignSelf={"center"} mt={5}>
              <Box
                borderLeftRadius={20}
                borderRightRadius={20}
                shadowColor={"#000"}
                shadowOpacity={0.25}
                shadowRadius={3.84}
                shadow={5}
                elevation={8}
                mb={5}
              >
                <HStack mb={5}>
                  <Box _dark={{ bg: "#485860" }} _light={{ bg: "#FFFAE1" }} borderLeftRadius={20}>
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
                  <Box _dark={{ bg: "#485860" }} _light={{ bg: "#FFFAE1" }} w={200} p={2} borderRightRadius={20}>
                    <Text fontSize={20} fontWeight={"bold"}>
                      林毓庭
                    </Text>
                    <Text fontSize={16}>水餃很Q彈而且肉汁味很香，飽滿又大顆，食材味道可以很清楚的表現。</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box w={"100%"} h={20} 
             shadowColor={"#000"}
             shadowOpacity={0.25}
             shadowRadius={3.84}
             shadow={5}
             elevation={8}>
            
            <Box >
              <HStack>
              <Box  pt={6} ml={5}>
                    <AntDesign
                      name="message1"
                      color={"#5B5449"}
                      size={30}
                    />
                </Box>
                <Box ml={2}>
                  <Input
                    variant="filled"
                    placeholder="留下您的評論"
                    fontSize={15}
                    borderRadius={15}
                    mt={5}
                    mb={5}
                    _dark={{
                      bg: "#485860",
                      borderColor: "white",
                      borderWidth: 2,
                    }}
                    _light={{
                      bg: "#FFFAE1",
                      borderColor: "black",
                      borderWidth: 0.6,
                    }}
                    w={280}
                    letterSpacing={4}
                    shadow={5}
                    // elevation={5}
                    
                    // InputRightElement={<TouchableOpacity><MaterialCommunityIcons
                    //   name="send"
                    //   color={"#A1917A"}
                    //   size={30}
                      
                    // /></TouchableOpacity>}
                    
                  />
                </Box>
                <Box  pt={6} ml={2}>
                  <TouchableOpacity
                      onPress={() => Toast.show({ description: "已送出" })}>
                    <MaterialCommunityIcons
                      name="send"
                      color={"#5B5449"}
                      size={30}
                    />
                  </TouchableOpacity>
                </Box>
              </HStack>
            </Box>

                    
            </Box>
          </Center>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView flex={1}>
          <Box _dark={{ bg: "#7888A0" }} 
            _light={{ bg: "#FFFCF4" }}  alignSelf={"center"} mt={5}>
            <Box
              borderLeftRadius={20}
              borderRightRadius={20}
              shadowColor={"#000"}
              shadowOpacity={0.25}
              shadowRadius={3.84}
              shadow={5}
              elevation={8}
              mb={5}
            >
              <HStack shadow={5}>
                <Box _dark={{ bg: "#485860" }} 
            _light={{ bg: "#FFFAE1" }}  w={200} p={2} borderLeftRadius={20} >
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
              <HStack shadow={5}>
                <Box _dark={{ bg: "#485860" }} 
            _light={{ bg: "#FFFAE1" }} w={200} p={2} borderLeftRadius={20}>
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
              <HStack shadow={5}>
                <Box _dark={{ bg: "#485860" }} 
            _light={{ bg: "#FFFAE1" }} w={200} p={2} borderLeftRadius={20}>
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
      <Box _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }}>
        <Image source={{ uri: photo }} alt="store" w="100%" h="300" />
        <Center position="absolute" alignSelf={"center"} mt={250}>
          <Box
            _dark={{ bg: "#485860" }} 
            _light={{ bg: "#FFFAE1" }}
            shadow={5}
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
                <Text fontSize={24} 
                fontWeight={"bold"}
                _dark={{ color: "white" }} 
                _light={{ color: "black" }}
                >
                  {name}
                </Text>
              </Box>
            </HStack>
            <Box pb={1} alignSelf={"center"}>
              <HStack mb={5}>
                <Starbar star={star} />
                <Text mt={0.5}>
                  {star != null ? (
                    <Text  _dark={{ color: "white" }}
                    _light={{ color: "black" }}>
                      {star}.0 <Text _dark={{ color: "white" }}
              _light={{ color: "#3D3D3D" }}>/ 5.0</Text>
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
            <Text ml={2} fontSize={20} fontWeight={"bold"}>
              {address}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <Entypo name="old-phone" color={"#463C2E"} size={25} />
            <Text ml={3} fontSize={20} fontWeight={"bold"}>
              {phone}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <AntDesign name="rest" color={"#463C2E"} size={25} />
            <Text ml={3} fontSize={20} fontWeight={"bold"}>
              {time}
            </Text>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}
          ></Divider>
          <HStack ml={8} mb={3} mt={5}>
            <MaterialIcons name="restaurant-menu" color={"#463C2E"} size={25} />
            <Pressable onPress={() => Linking.openURL(url)}>
              <Text ml={3} fontSize={20} fontWeight={"bold"}>
                {menu}
              </Text>
            </Pressable>
          </HStack>
          <Divider
            h={0.5}
            w="83%"
            alignSelf="flex-end"
            _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}
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
