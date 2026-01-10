import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { createBook, updateBook } from "../api/http";

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {
  const [bookName, setBookName] = useState(selectedItem?.book_title ?? "");
  const [authorName, setAuthorName] = useState(selectedItem?.name_of_author ?? "");
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? "");
  const [price, setPrice] = useState(selectedItem?.price_of_book ?? "");

  
  const createNewBook = () => {
     createBook({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (error) => {
        Alert.alert(`Error happen1: ${error}`)
      }
     })
  }

  const editBook = () => {
     updateBook({
      itemID: selectedItem.id,
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (error) => {
        Alert.alert(`Error happen2: ${error}`)
      }
     })
  }
  console.log(bookName);
  return (
    <SafeAreaView>
      <AntDesign
      style={styles.navIcon}
        name="close-circle"
        size={24}
        color="#E81D1D"
        onPress={onCloseIconPress}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput
          placeholder={"Book name"}
          value={bookName}
          onChangeText={setBookName}
        />
        <AppTextInput
          placeholder={"Author name"}
          value={authorName}
          onChangeText={setAuthorName}
        />
        <AppTextInput
          placeholder={"Cover image"}
          value={coverURL}
          onChangeText={setCoverURL}
        />
        <AppTextInput
          placeholder={"Book price"}
          value={price}
          onChangeText={setPrice}
          keyboardType={"numeric"}
        />
         <AppButton onPress={!!selectedItem ? editBook : createNewBook}/>
      </View>
     
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  navIcon: {
    marginStart: 15
  }
});
