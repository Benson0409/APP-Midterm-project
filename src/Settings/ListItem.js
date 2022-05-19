import React from "react";
import {
  Text,
  HStack,
  Pressable,
  Box,
  Center,
  useColorMode,
  Switch,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListItem = ({ title, navigation, destination, icon }) => {
  if (icon == "icon1") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5">
          <Box ml={5} mr={15} mt={0.5}>
            <FontAwesome name="user-circle-o" color="#FCAA87" size={30} />
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
            <FontAwesome5 name="user-edit" color="#FCAA87" size={25} />
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
            <MaterialIcons name="text-fields" color="#FCAA87" size={30} />
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
              color="#FCAA87"
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
      <HStack _dark={{}} _light={{}} py="5" mt={5}>
        <Box ml={5} mr={15} pt={0.5}>
          <Entypo
            name="light-up"
            color="#FCAA87"
            size={30}
          />
        </Box>

        <Box>
          <Center
            // shadow={2}
            borderRadius="50"
            alignSelf="center"
            // px="18"
            // py="3"
            // _dark={{
            //   bg: "black",
            //   borderColor: "blueGray.500",
            //   borderWidth: 0.6,
            // }}
            // _light={{ bg: "white" }}
            // borderRadius="md"
            // alignSelf="center"
          >
            <HStack space={8} alignItems="center">
              <Text fontSize="20">
                {colorMode == "light" ? "淺色模式" : "深色模式"}
              </Text>
              <Switch
                name="light Mode"
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                accessibilityLabel="display-mode"
                accessibilityHint="light or dark mode"
                offTrackColor="warning.400"
                onTrackColor="warning.200"
                onThumbColor="warning.400"
                offThumbColor="indigo.50"
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
