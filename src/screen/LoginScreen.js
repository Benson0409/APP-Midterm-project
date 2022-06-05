import React, { useState } from "react";

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  ScrollView,
  FormControl,
  useColorMode,
  VStack,
  Text,
  Input,
  WarningOutlineIcon,
  KeyboardAvoidingView,
  Center,
  Box,
  Heading,
  Link,
  Button,
  HStack,
  Image,
  Divider,
} from "native-base";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SpinnerBtn from "./SpinnerButton";

const LoginScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <ScrollView _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }}>
      <Center w="100%" h="100%">
        <VStack>
          <Image
            source={{
              uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/無背景bear.png?raw=true",
            }}
            alt="food"
            w="300"
            h="300"
          />
          <Box shadow={5} mt={-8}>
            <Input
              variant="filled"
              placeholder="電子郵件"
              fontSize={20}
              borderRadius={20}
              mt={5}
              mb={5}
              _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
              _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
              borderColor={"black"}
              w={250}
              letterSpacing={2}
              shadow={5}
              color={"#929292"}
              alignSelf={"center"}
            />
          </Box>
          <Box shadow={5}>
            <Input
              variant="filled"
              placeholder="密碼"
              fontSize={20}
              borderRadius={20}
              mt={5}
              mb={5}
              _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
              _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
              borderColor={"black"}
              w={250}
              letterSpacing={2}
              color={"#929292"}
              alignSelf={"center"}
            />
          </Box>
          {/* <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        ></Heading>
        <VStack space={3} >
          <FormControl.Label>
            <Text fontSize="18" fontWeight="600">
              電子郵件
            </Text>
          </FormControl.Label>
          <FormControl bg={"#FFFAE1"} borderRadius={20}>
            <Input />
          </FormControl>
          <FormControl.Label>
            <Text fontSize="18" fontWeight="600">
              密碼
            </Text>
          </FormControl.Label>
          <FormControl bg={"#EDEDEF"} >
            <Input type="password" />
          </FormControl> */}
          <Box mr={8}>
            <Link
              _text={{
                fontSize: "14",
                fontWeight: "500",
              }}
              alignSelf="flex-end"
              _dark={{ color: "white" }}
              _light={{ color: "#51483C" }}
            >
              忘記密碼
            </Link>
          </Box>

          <SpinnerBtn
            title="登錄"
            backgroundColor="#4AAF4C"
            onPress={() => console.log("Pressed!!")}
            wide="250"
          />

          {/* <Button
            mt="2"
            width="250"
            alignSelf="center"
            _dark={{ bg: "#1C3851" }}
            _light={{ bg: "#A1917A" }}
            borderRadius={20}
            shadow={5}
            colorScheme={"yellow"}
          >
            <Text
              fontSize="20"
              fontWeight="600"
              _dark={{ color: "white" }}
              _light={{ color: "white" }}
            >
              登入
            </Text>
          </Button> */}
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="14"
              _dark={{ color: "white" }}
              _light={{ color: "#51483C" }}
            >
              尚未有帳號
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text
                underline
                _dark={{ color: "white" }}
                _light={{ color: "#51483C" }}
                fontWeight={"bold"}
                fontSize="14"
                ml={2}
              >
                註冊
              </Text>
            </Pressable>
          </HStack>
          <HStack mt="6" justifyContent="center">
            <Divider
              h={0.5}
              w="10"
              alignSelf="center"
              _dark={{ bg: "#1C3851" }}
              _light={{ bg: "#A1917A" }}
              mr={2}
            >
              {" "}
            </Divider>
            <Text
              fontSize="14"
              color="#51483C"
              _dark={{
                color: "white",
              }}
            >
              其他方式登錄
            </Text>
            <Divider
              h={0.5}
              w="10"
              alignSelf="center"
              _dark={{ bg: "#1C3851" }}
              _light={{ bg: "#A1917A" }}
              ml={2}
            >
              {" "}
            </Divider>
          </HStack>
          <HStack alignSelf="center" mt={3} mb={2}>
            <Box mr={10}>
              <FontAwesome
                name="google-plus-circle"
                color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
                size={40}
              />
            </Box>
            <Box>
              <MaterialIcons
                name="facebook"
                color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
                size={40}
              />
            </Box>
            <Box ml={10}>
              <Entypo
                name="instagram-with-circle"
                color={colorMode == "light" ? "#463C2E" : "#FFE3B3"}
                size={40}
              />
            </Box>
          </HStack>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default LoginScreen;
