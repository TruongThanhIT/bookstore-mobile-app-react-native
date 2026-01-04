import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/BottomTabs";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <HomeScreen />
    
  );
}
