import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const TomatoScreen = () => {
  const navigation = useNavigation();
  const endpointURL = "https://69586d4a6c3282d9f1d4ff8a.mockapi.io/books";
  const getListOfBooks = async () => {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TomatoScreen Screen</Text>
      <Button 
      title="Load books" 
      onPress={getListOfBooks}
      />
      <Button
        title="Go to Gold Screen"
        onPress={() => navigation.navigate("GoldScreen")}
      />
      <Text onPress={() => navigation.navigate("GoldScreen", { name: "Mia" })}>
        Name: Mia
      </Text>
      <Text onPress={() => navigation.navigate("GoldScreen", { name: "Joe" })}>
        Name: Joe
      </Text>
    </View>
  );
};

export default TomatoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
