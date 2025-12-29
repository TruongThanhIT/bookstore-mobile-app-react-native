import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Button, Text, Modal } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style={{backgroundColor:"gold", flex:1, justifyContent:"center"}}>
      <Button title="Open the Modal" onPress={() => setModalVisible(true)}/>
      <Modal visible={modalVisible} animationType="slide">
        <Text style={{fontSize:50, marginTop:20}}>This is a Modal</Text>
        <Button title="Close the Modal" onPress={() => setModalVisible(false)}/>
          <AntDesign name="close-circle" size={42} color="red" onPress={() => setModalVisible(false)}/>
      </Modal>
    </SafeAreaView>
  );
}
