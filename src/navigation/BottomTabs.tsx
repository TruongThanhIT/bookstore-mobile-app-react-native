import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import TomatoScreen from '../screens/TomatoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:"dodgerblue",
        tabBarInactiveTintColor:"#A7CCF6",
        tabBarStyle: {
          backgroundColor:"#fff"
        },
        tabBarLabelStyle:{
          fontSize:15,
          fontWeight:"bold"
        },
      }}
    >
      <Tab.Screen options={{title:"Home", tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />}} name="HomeScreen" component={HomeScreen} />
      <Tab.Screen options={{title:"Profile", tabBarIcon: ({color}) => <AntDesign name="profile" size={24} color={color} />}} name="ProfileScreen" component={ProfileScreen} />
       <Tab.Screen options={{title: "Setting", tabBarIcon: ({color}) => <Feather name="settings" size={24} color={color} />}} name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}

