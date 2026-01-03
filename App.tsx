import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />  
    </NavigationContainer>
    
  );
}
