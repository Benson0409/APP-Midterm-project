import React from "react";
import {
  Text,
  HStack,
  VStack,
  Pressable,
  Box,
  Center,
  useColorMode,
  Switch,
  Image,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListItem = ({ title, navigation, destination, icon }) => {
  const { colorMode } = useColorMode();
  if (icon == "icon1") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <Box alignSelf={"center"} mt={10}>
          <VStack>
            <Image
              source={{
                uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/PeoplePicture2.png?raw=true",
              }}
              alt="food"
              w="100"
              h="100"
              borderLeftRadius={20}
            />
            <Text
              alignSelf={"center"}
              mt={2}
              fontSize={24}
              color={"white"}
              fontWeight={"bold"}
            >
              使用者
            </Text>
          </VStack>
        </Box>
        <HStack _dark={{}} _light={{}} py="5" mt={30}>
          <Box ml={5} mr={15} mt={0.5}>
            <FontAwesome
              name="user-circle-o"
              color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
              size={30}
            />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon2") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={1}>
            <FontAwesome5
              name="user-edit"
              color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
              size={25}
            />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon3") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={0.5}>
            <MaterialIcons
              name="text-fields"
              color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
              size={30}
            />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon4") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={0.5}>
            <MaterialCommunityIcons
              name="translate"
              color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
              size={30}
            />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon5") {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      // <Pressable
      //   onPress={() => {
      //     destination ? navigation.navigate(destination) : null;
      //   }}
      // >
      <HStack _dark={{}} _light={{}} py="5" mt={2}>
        <Box ml={5} mr={15} mt={3}>
          <Entypo
            name="light-up"
            color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
            size={30}
          />
        </Box>

        <Box>
          <Center
            shadow={5}
            w={300}
            h={60}
            px="18"
            py="3"
            _dark={{
              bg: "#1C3851",
              borderColor: "blueGray.500",
              borderWidth: 0.6,
            }}
            _light={{ bg: "#A1917A" }}
            borderColor={"#A1917A"}
            borderWidth={2}
            borderRadius="20"
            alignSelf="center"
          >
            <HStack space={20}>
              <Text fontSize="20" color={"white"} fontWeight={"bold"}>
                {colorMode == "light" ? "淺色模式" : "深色模式"}
              </Text>
              <Switch
                name="light Mode"
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                accessibilityLabel="display-mode"
                accessibilityHint="light or dark mode"
                offTrackColor="white"
                onTrackColor="white"
                onThumbColor="#51483C"
                offThumbColor="#7888A0"
              />
            </HStack>
          </Center>
        </Box>
      </HStack>
      // </Pressable>
    );
  } else {
    return null;
  }
};

export default ListItem;
