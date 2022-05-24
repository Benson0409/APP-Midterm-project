import React from "react";
import {
  Box,
  VStack,
  Center,
  Text,
  Pressable,
  HStack,
  Divider,
  useColorMode,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const ActionScreen = ({ navigation, onClose, site }) => {
  const{colorMode} = useColorMode();
  const {
    name,
    type,
    value,
    adr,
    phone,
    time,
    distance,
    latitude,
    longitude,
  } = site;

  return (
    <VStack h="380" w="100%" bg="#FFFCF4" borderTopRadius={20}>
      <Box   _dark={{ bg: "#1C3851" }} 
          _light={{ bg: "#463C2E" }} h={120} shadow={5}>
        <Pressable
          onPress={onClose}
          position="absolute"
          top={-30}
          right={8}
          _dark={{ bg: "#485860" }} 
          _light={{ bg: "#FFFAE1" }}
          borderRadius={100}
          w={60}
          h={60}
          shadow={5}
        >
          <Box alignSelf={"center"} mt={2} >
            <FontAwesome5 name="walking" color={colorMode== "light" ? "#463C2E" : "white"} size={40} />
          </Box>
        </Pressable>
        <VStack ml={5}>
          <Text fontSize={30} mt={5} color={"white"} fontWeight={"bold"}>
            {name}
          </Text>
          <HStack>
            <Text fontSize={20} color={"#B8B8B8"} mr={2}>
              <FontAwesome5 name="fish" color={colorMode== "light" ? "#396B99" : "#FFE3B3"} size={20} /> {value}
            </Text>
            <Text fontSize={20} color={"#B8B8B8"} mr={140}>
              {type}{" "}
            </Text>
            <Text fontSize={20} color={"#FFFAE1"}>
              {distance}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box bg={"#FFFCF4"}>
        <HStack ml={5} mt={5}>
          <MaterialCommunityIcons name="map-marker" color={"red"} size={28} />
          <Text fontSize={18} color={"black"}>{adr}</Text>
        </HStack>
        <Divider mt={3} h={0.5} w="100%"  _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}></Divider>
        <HStack ml={5} mt={5}>
          <Entypo name="old-phone" color={colorMode== "light" ? "#463C2E" : "#1C3851"} size={28} />
          <Text fontSize={20} ml={1} color={"black"}>
            {phone}
          </Text>
        </HStack>
        <Divider mt={3} h={0.5} w="100%"  _dark={{ bg: "#1C3851" }} 
            _light={{ bg: "#A1917A" }}></Divider>
        <HStack ml={5} mt={5}>
          <AntDesign name="rest" color={colorMode== "light" ? "#463C2E" : "#1C3851"} size={28} />
          <Text fontSize={20} ml={1} color={"black"}>
            {time}
          </Text>
        </HStack>
        <Pressable
          onPress={() => navigation.navigate("DetailScreen", site)}
          height={30}
          w={100}
          _dark={{ bg: "#1C3851" }} 
          _light={{ bg: "#463C2E" }}
          borderRadius={25}
          mt={5}
          alignSelf={"center"}
          shadow={5}
        >
          <Text color={"white"} fontSize="14" pt={1} alignSelf={"center"}>
            詳細資訊
          </Text>
        </Pressable>
      </Box>
    </VStack>
  );
};
export default ActionScreen;
