import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  StatusBar,
  extendTheme,
  useColorMode,
  Image,
  AspectRatio,
  HStack,
} from "native-base";
import { TouchableOpacity, activeOpacity, Platform } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useDispatch, useSelector } from "react-redux";

// import {
//   AnimatedTabBarNavigator,
//   DotSize, // optional
//   TabElementDisplayOptions, // optional
//   TabButtonLayout, // optional
//   IAppearanceOptions, // optional
// } from "react-native-animated-nav-tab-bar";

import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import SearchScreen from "../screen/SearchScreen";
import SectionScreen from "../screen/SectionScreen";
import SettingsScreen from "../screen/SettingsScreen";
import DisplaySettingScreen from "../screen/DisplaySettingScreen";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";
import FavoriteScreen from "../screen/FavoriteScreen";

import { lightTheme, darkTheme } from "../Theme";

import foodData from "../json/food.json";

// const likeValue = useSelector(selectLike);
// const dispatch = useDispatch();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = AnimatedTabBarNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  const { colorMode } = useColorMode();
  const MyTheme = colorMode == "light" ? lightTheme : darkTheme;
  return (
    <NavigationContainer theme={MyTheme}>
      <HStack
        _dark={{ bg: "#1C3851" }}
        _light={{ bg: "#A1917A" }}
        px="3"
        py="5"
        w="100%"
      >
        <StatusBar
          barStyle={colorMode == "light" ? "dark-content" : "light-content"}
          // backgroundColor={colorMode == "light" ? "#A1917A" : "#1C3851"}
        />
      </HStack>
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor="#463C2E"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#A1917A" }}
      screenOptions={{
        tabBarInactiveTintColor: colorMode == "light" ? "white" : "#7888A0",
        tabBarActiveTintColor: colorMode == "light" ? "#463C2E" : "white",
        tabBarStyle: {
          backgroundColor: colorMode == "light" ? "#A1917A" : "#1C3851",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
          bottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",

          fontWeight: "bold",
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          headerShown: false,
          title: "搜尋",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          headerShown: false,
          title: "最愛",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart-multiple"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "設定",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const SettingsStack = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // title: "設定",
          headerShadowVisible: false,
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "深淺主題",
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "登錄",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "#1C3851",
          },
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },

          // headerBackTitle: "返回",
          // gestureEnabled: true,
          // headerBackImage: () => (
          //   <FontAwesome5 name="arrow-alt-circle-left" size={24} color="#fff" />
          // ),

          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
        })}
        navigationOption
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({ navigation }) => ({
          title: "註冊",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "#1C3851",
          },
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const { colorMode } = useColorMode();
  const [Like, setLike] = useState(false);
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ navigation, route }) => ({
          title: route.params.name,
          // headerShown: false,
          // sheaderTintColor: colorMode == "light" ? "black" : "white",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "#1C3851",
          },
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: colorMode == "light" ? "#A1917A" : "#1C3851",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => setLike(!Like)}>
              {Like ? (
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={25}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={"white"}
                  size={25}
                />
              )}
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  const [Like, setLike] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          // title: "國北人今天想來點什麼？",

          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name="SectionScreen"
        component={SectionScreen}
        options={({ navigation, route }) => ({
          title: route.params.name,
          // headerShown: false,
          // sheaderTintColor: colorMode == "light" ? "black" : "white",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "#463C2E",
          },
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: colorMode == "light" ? "#A1917A" : "black",
          },

          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        options={({ navigation, route }) => ({
          title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "black",
          },
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          // backgroundColor: colorMode == "light" ? "black" : "white",
        })}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ navigation, route }) => ({
          // title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "#1C3851",
          },
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "#1C3851",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => setLike(!Like)}>
              {Like ? (
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={25}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={"white"}
                  size={25}
                />
              )}
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  const [Like, setLike] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ navigation, route }) => ({
          // title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "white" : "white",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#A1917A" : "black",
          },
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "#A1917A",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign
                name="back"
                color={colorMode == "light" ? "white" : "white"}
                size={30}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => setLike(!Like)}>
              {Like ? (
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={25}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={"white"}
                  size={25}
                />
              )}
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
