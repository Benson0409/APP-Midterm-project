import React, {
  useState,
  useEffect,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SomeValue,
} from "react";
import {
  Box,
  HStack,
  Input,
  AspectRatio,
  VStack,
  Divider,
  Heading,
  Icon,
} from "native-base";
import foodData from "../json/food.json";
import SearchList from "../Search/SearchList";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native-svg";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Device from "expo-device";
import { Platform } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import lightMap from "../mapStyle/standardMap.json";
import darkMap from "../mapStyle/AubergineMap.json";
import ActionButton from "../ActionSheet/ActionButton";
import mapJson from "../json/map.json";
const SearchScreen = ({ navigation }) => {
  const [msg, setMsg] = useState("Waiting...");

  const [onCurrentLocation, setOnCurrentLocation] = useState(false);

  const [region, setRegion] = useState({
    longitude: 121.544637,
    latitude: 25.024624,
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  });
  const [marker, setMarker] = useState({
    coord: {
      longitude: 121.544637,
      latitude: 25.024624,
    },
    name: "國立臺北教育大學",
    address: "台北市和平東路二段134號",
  });

  const [restaurant, setresurant] = useState(mapJson); //要加json檔
  const [zoomRatio, setZoomRatio] = useState(1);

  const onRegionChangeComplete = (rgn) => {
    if (rgn.longitudeDelta > 0.02) setZoomRatio(0.02 / rgn.longitudeDelta);
    else setZoomRatio(1);
  };

  const setRegionAndMarker = (location) => {
    setRegion({
      ...region,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    setMarker({
      ...marker,
      coord: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegionAndMarker(location);
    setOnCurrentLocation(true);
  };

  useEffect(() => {
    if (Platform.OS === "android" && !Device.isDevice) {
      setMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
      return;
    }
    getLocation();
  }, []);

  return (
    <Box flex={1}>
      <MapView
        // region={region}
        initialRegion={region}
        style={{
          // width: SCREEN_WIDTH | SomeValue,
          // height: SCREEN_HEIGHT | SomeValue,
          flex: 1,
          // minHeight: 800,
        }}
        // showsTraffic
        // provider="google"
        onRegionChangeComplete={onRegionChangeComplete}
        customMapStyle={lightMap}
      >
        <Marker
          coordinate={marker.coord}
          title={marker.name}
          description={marker.address}
        >
          <FontAwesome name={"map-marker"} size={60} color="#B12A5B" />
        </Marker>
        {zoomRatio > 0.14 &&
          restaurant.map((site) => (
            <Marker
              coordinate={{
                latitude: Number(site.latitude),
                longitude: Number(site.longitude),
              }}
              title={site.name}
              description={site.address}
              key={site.latitude}
            >
              <ActionButton
                navigation={navigation}
                zoomRatio={zoomRatio}
                site={site}
              />
            </Marker>
          ))}
      </MapView>
      {!onCurrentLocation && (
        <Box
          bg="white"
          borderRadius={60}
          position="absolute"
          shadow="2"
          zIndex={99}
          right={5}
          bottom={5}
        >
          <Ionicons
            name={"ios-locate"}
            size={60}
            color="black"
            onPress={getLocation}
          />
        </Box>
      )}
    </Box>
    // <Box _light={{ bg: "#A1917A" }} h={100} borderBottomRadius={20}>
    //   <Box alignSelf={"center"} mt={8}>
    //     <Input
    //       placeholder="搜尋國北附近美食"
    //       width="300"
    //       borderRadius="20"
    //       py="3"
    //       px="1"
    //       bg={"white"}
    //       fontSize="14"
    //       InputLeftElement={
    //         <Icon
    //           m="2"
    //           ml="3"
    //           size="6"
    //           color="black"
    //           as={<MaterialIcons name="search" />}
    //         />
    //       }
    //       InputRightElement={
    //         <Icon
    //           m="2"
    //           mr="3"
    //           size="6"
    //           color="gray.400"
    //           as={<MaterialIcons name="mic" />}
    //         />
    //       }
    //     />
    //   </Box>
    // </Box>
  );
};

export default SearchScreen;
