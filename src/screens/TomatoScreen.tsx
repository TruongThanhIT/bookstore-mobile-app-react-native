import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const TomatoScreen = () => {
  const [bookList, setBookList] = useState([]);
  const navigation = useNavigation();
  
  console.log("====================bookList=============================");
  console.log(bookList);
  console.log("=================================================");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TomatoScreen Screen</Text>
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
      <Button title="Load books" onPress={getListOfBooks} />
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text
              onPress={() => navigation.navigate("GoldScreen", { id: item.id })}
            >
              {item.name_of_author}
            </Text>
            <Text>{item.price_of_book}</Text>
            <Image
              source={{ uri: item.cover }}
              style={{
                height: 150,
                width: 150,
              }}
            ></Image>
          </View>
        )}
      />
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
