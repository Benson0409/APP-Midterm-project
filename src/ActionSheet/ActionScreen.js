import React from "react";
import { Box, VStack, Center, Text, Pressable, HStack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ActionScreen = ({ onClose, site }) => {
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
    <VStack h="50%" w="100%" bg="blueGray.50" borderRadius={20}>
      <Pressable onPress={onClose} position="absolute" top={2} right={3}>
        <MaterialCommunityIcons name="close" color="gray" size={30} />
      </Pressable>
      {/* <Box
        borderBottomColor={"white"}
        w={"15%"}
        h={1}
        borderRadius={3}
        bg="grey"
        mt={3}
        
      ></Box> */}
      <Box>
        <HStack>
          <VStack>
            <Box>
              <Text fontSize="lg" my={6} textAlign="center">
                {name}
              </Text>
              <Text>
                <FontAwesome5 name="fish" color={"#155C7A"} size={25} /> {value}
                {type}
              </Text>
            </Box>
          </VStack>
          <Box>{distance}</Box>
        </HStack>
      </Box>
      <Box px={6}>
        <Box>
          <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
          <Text fontWeight={"bold"}>{address}</Text>
        </Box>
        <Box>
          <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
          <Text fontWeight={"bold"}>{time}</Text>
        </Box>
        <Box>
          <FontAwesome5 name="fish" color={"#155C7A"} size={25} />
          <Text fontWeight={"bold"}>{phone}</Text>
        </Box>
        <Box>
          <Pressable
            // onPress={() => navigation.navigate("DetailScreen", Home)}
            height={30}
            w={100}
            bg="#5B5449"
            borderRadius={25}
            mt={5}
            mr={3}
            alignSelf={"flex-end"}
          >
            <Text color={"white"} fontSize="14" pt={1} alignSelf={"center"}>
              詳細資訊
            </Text>
          </Pressable>
        </Box>
      </Box>
    </VStack>
  );
};
export default ActionScreen;
