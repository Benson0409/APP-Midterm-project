import React, { useState, useRef } from "react";
import {
  View,
  LayoutAnimation,
  ActivityIndicator,
  Platform,
  UIManager,
} from "react-native";

import { Box, Button, Text } from "native-base";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SpinnerBtn = ({ title, backgroundColor, onPress }) => {
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const onPressBtn = () => {
    LayoutAnimation.easeInEaseOut();
    setWidth(width === null ? 60 : null);
    setHeight(height === null ? 60 : null);
    setLoading(loading === false ? true : false);
    onPress();
  };

  const renderButton = () => {
    console.log(`button width = ${width}, button height = ${height}`);
    return (
      <Box style={loading ? styles.containerStyle : styles.containerStyle}>
        <Button
          //   title={loading ? "  " : title}
          borderRadius={20}
          //   shadow={5}
          _dark={{ bg: "#1C3851" }}
          _light={{ bg: "#A1917A" }}
          onPress={() => onPressBtn()}
          buttonStyle={[
            { borderRadius: loading ? 30 : null },
            { width, height },
          ]}
          w="250"
        >
          <Text
            fontSize="20"
            fontWeight="600"
            _dark={{ color: "white" }}
            _light={{ color: "white" }}
          >
            {loading ? "" : "登入"}
          </Text>
        </Button>
      </Box>
    );
  };

  const renderActivityIndicator = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ position: "absolute", top: 15, left: 20, right: 20 }}
        />
      );
    }
  };

  return (
    <View style={styles.formStyle}>
      {renderButton()}
      {renderActivityIndicator()}
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: "center",
  },
  formStyle: {
    flex: 1,
    marginTop: 10,
  },
};

export default SpinnerBtn;
