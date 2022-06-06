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
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { StyleSheet, ActivityIndicator } from "react-native";

const AnimatedButton = Animated.createAnimatedComponent(Button);
const AnimationBtn = ({ title }) => {
  const [loginRequest, setLoginRequest] = useState(false);

  const rotation = useSharedValue(0);
  const btnWidth = useSharedValue("100%");
  const animatedSpinnerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  const animatedButtonStyles = useAnimatedStyle(() => {
    return {
      width: btnWidth.value,
    };
  }, [btnWidth.value]);
  const onPressButton = () => {
    // dispatch(loginAsync({ email, password }));
    setLoginRequest(!loginRequest);
    if (loginRequest) {
      rotation.value = withTiming(0, {
        duration: 1000,
        easing: Easing.linear,
      });
      btnWidth.value = withTiming("100%", {
        duration: 400,
        easing: Easing.linear,
      });
    } else {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 1000,
          easing: Easing.linear,
        }),
        -1
      );
      btnWidth.value = withTiming("15", {
        duration: 300,
        easing: Easing.linear,
      });
    }
  };

  //   const renderActivityIndicator = () => {
  //     if (loginRequest) {
  //       return (
  //         <ActivityIndicator
  //           size="small"
  //           color="white"
  //           style={{ position: "absolute", top: 15, left: 20, right: 20 }}
  //         />
  //       );
  //     }
  //   };
  return (
    <AnimatedButton
      mt="8"
      h="10"
      w="100%"
      mx="auto"
      colorScheme="indigo"
      borderRadius={loginRequest ? 48 : null}
      height={loginRequest ? "10" : null}
      style={animatedButtonStyles}
      onPress={onPressButton}
      _dark={{ bg: "#1C3851" }}
      _light={{ bg: "#A1917A" }}
    >
      {loginRequest ? (
        <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
      ) : (
        <Box alignItems="center">{title}</Box>
      )}
      {/* {renderActivityIndicator()} */}
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  spinner: {
    height: 20,
    width: 20,
    borderRadius: 30,
    borderWidth: 4,
    borderTopColor: "#f5f5f5",
    borderRightColor: "#f5f5f5",
    borderBottomColor: "lightblue",
    borderLeftColor: "lightblue",
    alignSelf: "center",
  },
});
export default AnimationBtn;
