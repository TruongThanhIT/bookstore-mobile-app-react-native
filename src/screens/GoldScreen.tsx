import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const GoldScreen = () => {
  const [author, setAuthor] = useState([]);
  const navigation = useNavigation();
  const { name, params } = useRoute();
  console.log(name);
  console.log(params);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button
        title="Go to Purple Screen"
        onPress={() => navigation.navigate("PurpleScreen")}
      />
      <Button title="Create Book" onPress={createBook} />
      <Button title="Delete Book" onPress={deleteBookByID} />
      <Button title="Update Book" onPress={updateBook} />
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
