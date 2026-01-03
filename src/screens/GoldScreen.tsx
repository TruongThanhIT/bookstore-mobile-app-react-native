import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const GoldScreen = () => {
  const [author, setAuthor] = useState([]);
  const navigation = useNavigation();
  const { name, params } = useRoute();
  console.log(name);
  console.log(params);

  const getBookByID = async () => {
    const endpointURL = "https://69586d4a6c3282d9f1d4ff8a.mockapi.io/books";
    const response = await axios.get(`${endpointURL}/${params.id}`);
    setAuthor(response.data?.name_of_author);
    console.log("📦 API Response:", JSON.stringify(response.data, null));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button
        title="Go to Purple Screen"
        onPress={() => navigation.navigate("PurpleScreen")}
      />
      <Button title="Get author name" onPress={getBookByID} />
      <Text>Author: {author}</Text>
    </View>
  );
};

export default GoldScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
