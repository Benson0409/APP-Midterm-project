import React from "react";
import { Box, Divider, Text, Image } from "native-base";
import ListItem from "../Settings/ListItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SettingsScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#7888A0" }} _light={{ bg: "#FFFCF4" }} h="100%">
      <Box
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
        position="absolute"
        w={400}
        h={400}
        borderRadius={400}
        shadow={8}
        top={-190}
        left={-5}
      >
        <Box position="absolute">
          <Image
            source={{
              uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/PeoplePicture2.png?raw=true",
            }}
            alt="food"
            w="100"
            h="100"
            borderLeftRadius={20}
            m={2}
          />
        </Box>
      </Box>
      <ListItem
        title="登入/註冊"
        navigation={navigation}
        destination="LoginScreen"
        icon="icon1"
      />
      <Divider
        h={0.5}
        w="85%"
        alignSelf="flex-end"
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
      ></Divider>
      <ListItem title="個人資料" navigation={navigation} icon="icon2" />
      <Divider
        h={0.5}
        w="85%"
        alignSelf="flex-end"
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
      ></Divider>
      <ListItem title="字體大小" navigation={navigation} icon="icon3" />
      <Divider
        h={0.5}
        w="85%"
        alignSelf="flex-end"
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
      ></Divider>
      <ListItem title="語言轉換" navigation={navigation} icon="icon4" />
      <Divider
        h={0.5}
        w="85%"
        alignSelf="flex-end"
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
      ></Divider>
      <ListItem
        title="深淺主題"
        navigation={navigation}
        destination="DisplaySetting"
        icon="icon5"
      />
    </Box>
  );
};

export default SettingsScreen;
