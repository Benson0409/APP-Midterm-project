import React from "react";
import foodData from "../json/food.json";
import Starbar from "../star/starabr";
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

  // if ({ label } == "brunch") {
  return (
<<<<<<< HEAD
  <ScrollView>
    <Box mx="auto" mb="8" >
      <VStack mt={10}>
        <Pressable onPress={() => navigation.navigate("DetailScreen", section)}>
          <AspectRatio w="350" h="250">
            <Image
              source={{ uri: foodData.findList[0].findDetail[0].photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
=======
    <ScrollView>
      <Box mx="auto" mb="8">
        <VStack mt={10}>
          <Pressable
            onPress={() => navigation.navigate("DetailScreen", section)}
          >
            <AspectRatio w="350" h="250">
              <Image
                source={{ uri: foodData.findList[0].findDetail[0].photo }}
                alt="store"
                borderRadius={10}
              />
            </AspectRatio>
          </Pressable>
>>>>>>> eb94635181419e482ab2b96ea77196ac8f95c704

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
        <VStack mt={10}>
          <Pressable
            onPress={() => navigation.navigate("DetailScreen", section)}
          >
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
<<<<<<< HEAD
        </HStack>
      </VStack>
    </Box>
    </ScrollView>
    
=======
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
      </Box>
    </ScrollView>
>>>>>>> eb94635181419e482ab2b96ea77196ac8f95c704
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
