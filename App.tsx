import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/BottomTabs";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  console.log("User type: ", text);
  return (
    <NavigationContainer>
      <MyTabs />  
    </NavigationContainer>
    
  );
}
