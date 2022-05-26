import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, StatusBar } from "native-base";

import Navigation from "./src/navigation";
//5/17
import { Provider } from "react-redux";
import { Stores } from "./src/redux/stores";

export default function App() {
  return (
    //5/17

    <Provider store={Stores}>
      <SafeAreaProvider>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
