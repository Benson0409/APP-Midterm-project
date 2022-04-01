import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "native-base";
import { extendTheme, useColorMode } from "native-base";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import HomeScreen from "../screen/HomeScreen";

import { lightTheme, darkTheme } from "../Theme";

import foodData from "../json/food.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  // const { colors } = useTheme();
  // const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // tabBarInactiveTintColor: "#EC9976", //未被選中的顏色
        tabBarActiveTintColor: "#EC9976", //選中的顏色
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="feature-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const SettingsStack = () => {
//   // const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           title: "Settings",
//           headerTitleStyle: {
//             fontWeight: "400",
//             fontSize: 20,
//           },
//         }}
//       />
//       <Stack.Screen
//         name="DisplaySetting"
//         component={DisplaySettingScreen}
//         options={{
//           title: "Display",
//           headerTintColor: colorMode == "light" ? "black" : "white",
//           headerTitleStyle: {
//             fontWeight: "400",
//             fontSize: 20,
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const HomeStack = () => {
  // const { colorMode } = useColorMode();

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
          // headerShown: false,
          title: "國北人今天想來點什麼？",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      {/* <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default Navigation;