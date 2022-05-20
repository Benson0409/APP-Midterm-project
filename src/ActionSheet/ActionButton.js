import React from "react";
import { Center, Pressable, Actionsheet, useDisclose } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionScreen from "../ActionSheet/ActionScreen";

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center
          bg="white"
          borderRadius={80}
          p={2 * zoomRatio}
          borderWidth={1 * zoomRatio}
          borderColor="black"
        >
          <Icon name={"cutlery"} size={20 * zoomRatio} color="black" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
};
