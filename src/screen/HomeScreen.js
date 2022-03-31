import React from "react";
import { Box } from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";

const HomeScreen = ({ navigation }) => {
  return (
    <Box>
      <HomeList list={foodData.restaurantList} navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;
