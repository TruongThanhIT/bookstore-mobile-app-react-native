import { createStackNavigator } from "@react-navigation/stack";
import TomatoScreen from "../screens/TomatoScreen";
import SettingScreen from "../screens/SettingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TomatoScreen" component={TomatoScreen} />
            <Stack.Screen name="GoldScreen" component={SettingScreen} />
            <Stack.Screen name="PurpleScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator