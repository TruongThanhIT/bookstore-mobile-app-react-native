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
  const endpointURL = "https://69586d4a6c3282d9f1d4ff8a.mockapi.io/books";

  const getBookByID = async () => {
    try {
      const response = await axios.get(`${endpointURL}/${params.id}`);
      setAuthor(response.data?.name_of_author);
      console.log("📦 API Response:", JSON.stringify(response.data, null));
    } catch (error) {
      console.log("An Error Occurred", error);
    }
  };

  const deleteBookByID = async () => {
    try {
      const response = await axios.delete(`${endpointURL}/${params.id}`);
      Alert.alert("Book Is Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const body = {
    name_of_author: "Thanh Truong",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629260207i/58798298.jpg",
    price_of_book: "30000",
    email_of_seller: "thanhtruong@gmail.com",
  };
  const createBook = async () => {
    try {
      const response = await axios.post(endpointURL, body);
      Alert.alert("Book has been created!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = async() => {
    try {
      const response = await axios.put(`${endpointURL}/${params.id}`, body);
      Alert.alert("Book has been updated!");
    } catch (error) {
      console.log(error);
    }
  }
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
