import React from "react";
import foodData from "../json/food.json";
import Starbar from "../star/starabr";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Box,
  VStack,
  Pressable,
  Text,
  AspectRatio,
  Image,
  HStack,
  ScrollView,
} from "native-base";

const SectionScreen = ({
  route,
  navigation,
  section = foodData.restaurantList,
}) => {
  const { photo, title, findDetail, label } = route.params;

  return (
  <ScrollView>
    <Box width="100%" 
     _dark={{ bg: "#3F382E" }}
     _light={{ bg: "#FFFAE1" }}
     >
      <HStack mt={5}  >
          <Box  mt={1} ml={30}>
              <MaterialIcons name="restaurant-menu" color={"gray"} size={28} />
            </Box>
            <Text  fontSize={26}>早午餐</Text>
        </HStack>
      <VStack mt={5} alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[0].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>

          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[0].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[0].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[0].star} />
            <Text>
              {foodData.findList[0].findDetail[0].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[0].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>
        

        <VStack mt={10}  alignSelf="center">
          <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
            <AspectRatio w="350" h="250">
              <Image
                source={{ uri: foodData.findList[0].findDetail[1].photo }}
                alt="store"
                borderRadius={10}
              />
            </AspectRatio>
          </Pressable>

          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[1].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[1].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[1].star} />
            <Text>
              {foodData.findList[0].findDetail[1].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[1].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[2].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>

          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[2].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[2].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[2].star} />
            <Text>
              {foodData.findList[0].findDetail[2].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[2].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[3].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>

          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[3].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[3].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[3].star} />
            <Text>
              {foodData.findList[0].findDetail[3].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[0].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>
        
        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[4].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>

          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[4].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[4].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[4].star} />
            <Text>
              {foodData.findList[0].findDetail[4].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[4].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[5].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[5].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[5].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[5].star} />
            <Text>
              {foodData.findList[0].findDetail[5].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[5].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[6].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[6].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[6].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[6].star} />
            <Text>
              {foodData.findList[0].findDetail[6].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[6].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[7].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[7].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[7].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[7].star} />
            <Text>
              {foodData.findList[0].findDetail[7].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[7].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center">
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[8].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[8].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[8].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[8].star} />
            <Text>
              {foodData.findList[0].findDetail[8].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[8].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>

        <VStack mt={10}  alignSelf="center" mb={10}>
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[9].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
          <Text fontWeight="bold" fontSize="18">
            {foodData.findList[0].findDetail[9].name}
          </Text>
          <Text color={"#808080"}>
            {foodData.findList[0].findDetail[9].address}
          </Text>
          <HStack>
            <Starbar star={foodData.findList[0].findDetail[9].star} />
            <Text>
              {foodData.findList[0].findDetail[9].star != null ? (
                <Text>
                  {foodData.findList[0].findDetail[9].star}.0
                  <Text color={"#808080"}>/ 5.0</Text>
                </Text>
              ) : null}
            </Text>
          </HStack>
        </VStack>
    </Box>
    
    </ScrollView>
 
    
  );
  // } else if ({ label } == "prandial") {
  //   return (
  //     <Box mx="auto" mb="8" bg="white">
  //       <VStack mt={10}>
  //         <Pressable
  //           onPress={() => navigation.navigate("DetailScreen", section)}
  //         >
  //           <AspectRatio w="350" h="250">
  //             <Image
  //               source={{ uri: foodData.findList[0].findDetail[0].photo }}
  //               alt="store"
  //               borderRadius={10}
  //             />
  //           </AspectRatio>
  //         </Pressable>

  //         <Text fontWeight="bold" fontSize="18">
  //           {foodData.findList[0].findDetail[0].name}
  //         </Text>
  //         <Text color={"#808080"}>
  //           {foodData.findList[0].findDetail[0].address}
  //         </Text>
  //         <HStack>
  //           <Starbar star={foodData.findList[0].findDetail[0].star} />
  //           <Text>
  //             {foodData.findList[0].findDetail[0].star != null ? (
  //               <Text>
  //                 {foodData.findList[0].findDetail[0].star}.0
  //                 <Text color={"#808080"}>/ 5.0</Text>
  //               </Text>
  //             ) : null}
  //           </Text>
  //         </HStack>
  //       </VStack>
  //     </Box>
  //   );
  // } else if ({ label } == "dessert") {
  //   return (
  //     <Box mx="auto" mb="8" bg="white">
  //       <VStack mt={10}>
  //         <Pressable
  //           onPress={() => navigation.navigate("DetailScreen", section)}
  //         >
  //           <AspectRatio w="350" h="250">
  //             <Image
  //               source={{ uri: foodData.findList[0].findDetail[0].photo }}
  //               alt="store"
  //               borderRadius={10}
  //             />
  //           </AspectRatio>
  //         </Pressable>

  //         <Text fontWeight="bold" fontSize="18">
  //           {foodData.findList[0].findDetail[0].name}
  //         </Text>
  //         <Text color={"#808080"}>
  //           {foodData.findList[0].findDetail[0].address}
  //         </Text>
  //         <HStack>
  //           <Starbar star={foodData.findList[0].findDetail[0].star} />
  //           <Text>
  //             {foodData.findList[0].findDetail[0].star != null ? (
  //               <Text>
  //                 {foodData.findList[0].findDetail[0].star}.0
  //                 <Text color={"#808080"}>/ 5.0</Text>
  //               </Text>
  //             ) : null}
  //           </Text>
  //         </HStack>
  //       </VStack>
  //     </Box>
  //   );
  // } else if ({ label } == "drink") {
  //   return (
  //     <Box mx="auto" mb="8" bg="white">
  //       <VStack mt={10}>
  //         <Pressable
  //           onPress={() => navigation.navigate("DetailScreen", section)}
  //         >
  //           <AspectRatio w="350" h="250">
  //             <Image
  //               source={{ uri: foodData.findList[0].findDetail[0].photo }}
  //               alt="store"
  //               borderRadius={10}
  //             />
  //           </AspectRatio>
  //         </Pressable>

  //         <Text fontWeight="bold" fontSize="18">
  //           {foodData.findList[0].findDetail[0].name}
  //         </Text>
  //         <Text color={"#808080"}>
  //           {foodData.findList[0].findDetail[0].address}
  //         </Text>
  //         <HStack>
  //           <Starbar star={foodData.findList[0].findDetail[0].star} />
  //           <Text>
  //             {foodData.findList[0].findDetail[0].star != null ? (
  //               <Text>
  //                 {foodData.findList[0].findDetail[0].star}.0
  //                 <Text color={"#808080"}>/ 5.0</Text>
  //               </Text>
  //             ) : null}
  //           </Text>
  //         </HStack>
  //       </VStack>
  //     </Box>
  //   );
  // } else {
  //   return null;
  // }
};
export default SectionScreen;
