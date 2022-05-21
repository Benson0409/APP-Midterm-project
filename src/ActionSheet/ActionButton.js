import React from "react";
import { Center, Pressable, Actionsheet, useDisclose } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActionScreen from "./ActionScreen";
import { Marker } from "react-native-maps";
const ActionButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { navigation, zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center
          bg="#155C7A"
          borderRadius={80}
          p={2 * zoomRatio}
          borderWidth={1 * zoomRatio}
          borderColor="black"
        >
          <Ionicons name={"restaurant"} size={20 * zoomRatio} color="white" />
        </Center>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} navigation={navigation} />
      </Actionsheet>
      {/* </Marker> */}
    </>
  );
};
export default ActionButton;
