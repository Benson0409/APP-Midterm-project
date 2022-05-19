import React from "react";
import { Box, Divider, Text } from "native-base";
import ListItem from "../Settings/ListItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SettingsScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }} h="100%">
      {/* <Box bg={"#A1917A"} w={"100%"} borderRadius={500}>
        <Text>hi</Text>
      </Box> */}
      <ListItem
        title="登入/註冊"
        navigation={navigation}
        destination="LoginScreen"
        icon="icon1"
      />
      <Divider h={0.5} w="100%" alignSelf="flex-end" bg={"#A1917A"}></Divider>

      <ListItem title="個人資料" navigation={navigation} icon="icon2" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
      <ListItem title="字體大小" navigation={navigation} icon="icon3" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
      <ListItem title="語言轉換" navigation={navigation} icon="icon4" />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
      <ListItem
        title="深淺主題"
        navigation={navigation}
        destination="DisplaySetting"
        icon="icon5"
      />
      <Divider h={0.5} w="85%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
    </Box>
  );
};

export default SettingsScreen;
