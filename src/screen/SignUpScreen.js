import { useState } from "react";
import { Platform } from "react-native";
import {
  ScrollView,
  FormControl,
  useColorMode,
  VStack,
  Text,
  Input,
  WarningOutlineIcon,
  KeyboardAvoidingView,
  Button,
  Toast,
  Box,
} from "native-base";
import SpinnerBtn from "./SpinnerButton";
import AnimationButton from "./AnimationButton";
const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [nameIsError, setNameIsError] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(true);
  const [adrs, setAdrs] = useState("");
  const [tel, setTel] = useState("");
  const [password, setpassword] = useState("");
  const [passwordIsError, setpasswordIsError] = useState(true);

  const { colorMode } = useColorMode();
  const formLabelStyle = {
    color: colorMode == "light" ? "muted.700" : "white",
    fontSize: "20",
    fontWeight: 600,
  };
  const focusInputStyle = {
    borderColor: colorMode == "light" ? "muted.700" : "white",
    fontSize: "16",
  };

  const nameRegex = /^[a-zA-Z0-9_\-]+$/;
  const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }}>
        <Box h="100%">
          <VStack
            space={2}
            mt={10}
            width="300"
            alignSelf="center"
            shadow={5}
            mb="5"
          >
            <FormControl mb={5} isRequired isInvalid={nameIsError}>
              <FormControl.Label _text={formLabelStyle}>姓名</FormControl.Label>
              <Input
                placeholder="請填寫真實姓名"
                fontSize={16}
                variant="filled"
                borderRadius={20}
                borderColor={"#51483C"}
                _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
                _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
                _focus={focusInputStyle}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (text.match(nameRegex)) setNameIsError(false);
                  else setNameIsError(true);
                }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                必填
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mb={5} isRequired isInvalid={emailIsError}>
              <FormControl.Label _text={formLabelStyle}>
                電子郵件
              </FormControl.Label>
              <Input
                fontSize={16}
                placeholder="請填有效電子信箱"
                variant="filled"
                borderRadius={20}
                borderColor={"#51483C"}
                _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
                _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
                _focus={focusInputStyle}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (text.match(emailRegex)) setEmailIsError(false);
                  else setEmailIsError(true);
                }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                必填
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mb={5} isRequired isInvalid={passwordIsError}>
              <FormControl.Label _text={formLabelStyle}>密碼</FormControl.Label>
              <Input
                fontSize={16}
                placeholder="開頭必須大寫"
                variant="filled"
                borderRadius={20}
                borderColor={"#51483C"}
                _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
                _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
                _focus={focusInputStyle}
                value={password}
                onChangeText={(text) => {
                  setpassword(text);
                  if (text.match(passwordRegex)) setpasswordIsError(false);
                  else setpasswordIsError(true);
                }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                必填
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mb={5}>
              <FormControl.Label _text={formLabelStyle}>住址</FormControl.Label>
              <Input
                fontSize={16}
                placeholder="非必填"
                variant="filled"
                borderRadius={20}
                _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
                _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
                borderColor={"#51483C"}
                _focus={focusInputStyle}
                value={adrs}
                onChangeText={(text) => setAdrs(text)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormControl.Label _text={formLabelStyle}>
                電話號碼
              </FormControl.Label>
              <Input
                fontSize={16}
                placeholder="請填手機號碼"
                variant="filled"
                borderRadius={20}
                _dark={{ bg: "#485860", placeholderTextColor: "#929292" }}
                _light={{ bg: "#FFFAE1", placeholderTextColor: "#929292" }}
                borderColor={"#51483C"}
                _focus={focusInputStyle}
                value={tel}
                onChangeText={(text) => setTel(text)}
              />
            </FormControl>

            {/* <SpinnerBtn
              title="確認提交"
              backgroundColor="#4AAF4C"
              onPress={() => console.log("Pressed!!")}
              wide="150"
            /> */}
             <AnimationButton 
            title="確認提交" />
            {/* <Button
              onPress={() => Toast.show({ description: "已提交" })}
              mt="2"
              width="150"
              alignSelf="center"
              _dark={{ bg: "#1C3851" }}
              _light={{ bg: "#A1917A" }}
              borderRadius={20}
              shadow={5}
              colorScheme={"yellow"}
              mb={10}
            >
              <Text
                fontSize="16"
                fontWeight="600"
                _dark={{ color: "white" }}
                _light={{ color: "white" }}
              >
                確認提交
              </Text>
            </Button> */}
          </VStack>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
