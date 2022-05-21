import React from "react";
import { Box, VStack, Center, Text, Pressable, HStack,Divider } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const ActionScreen = ({ onClose, site,navigation }) => {
  const {
    name,
    type,
    value,
    address,
    phone,
    time,
    distance,
    latitude,
    longitude,
  } = site;

  return (
    <VStack h="350" w="100%" bg="white" borderTopRadius={20}>
      <Box bg={"#5B5449"}h={120} >
        <Pressable onPress={onClose} position="absolute" top={-30} right={8} bg={"#FFFAE1"} borderRadius={100} w={60} h={60} >
          <Box alignSelf={"center"} mt={2}>
          <FontAwesome5 name="walking" color="gray" size={40} />
          </Box>
        </Pressable>
        <VStack ml={5}>
        <Text fontSize={30} mt={5} color={"white"}>{name}</Text>
        <HStack>
        <Text fontSize={20} color={"#B8B8B8"} mr={2}><FontAwesome5 name="fish" color={"#2AA5D9"} size={20} /> {value}</Text>
        <Text fontSize={20} color={"#B8B8B8"} mr={140} >{type} </Text>
        <Text fontSize={20} color={"white"} >{distance}</Text>
        </HStack>
        </VStack>
      </Box>
      <Box>
      <HStack  ml={5} mt={5}>
            <MaterialCommunityIcons name="map-marker" color={"red"} size={28} />
            <Text fontSize={18}>
              {address}
            </Text>
      </HStack>
      <Divider
            mt={3}
            h={0.5}
            w="100%"
            bg={"#A1917A"}
          ></Divider>
      <HStack ml={5} mt={5}>
            <Entypo name="old-phone" color={"gray"} size={28} />
            <Text fontSize={20} ml={1}>
              {phone}
            </Text>
      </HStack>
      <Divider
            mt={3}
            h={0.5}
            w="100%"
            bg={"#A1917A"}
          ></Divider>
         <HStack ml={5} mt={5}>
            <AntDesign name="rest" color={"gray"} size={28} />
            <Text fontSize={20} ml={1}>
              {time}
            </Text>
      </HStack>
      <Pressable
            onPress={() => navigation.navigate("DetailScreen", Home)}
            height={30}
            w={100}
            bg="#5B5449"
            borderRadius={25}
            mt={5}
            alignSelf={"center"}
          >
            <Text color={"white"} fontSize="14" pt={1} alignSelf={"center"}>
              詳細資訊
            </Text>
          </Pressable>

      </Box>
    </VStack>
  );
}
export default ActionScreen;
