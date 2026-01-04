import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://69586d4a6c3282d9f1d4ff8a.mockapi.io/books";

  export const getListOfBooks = async ({onSuccess, onError}) => {
    try {
      const response = await axios.get(endpointURL);
      console.log(JSON.stringify(response.data, null, 3));
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log("An Error Occurred: ", error);
    }
  };

  export const getBookByID = async ({onSuccess, onError}) => {
    try {
      const response = await axios.get(`${endpointURL}/${params.id}`);
      onSuccess && onSuccess(response.data)
      console.log("📦 API Response:", JSON.stringify(response.data, null));
    } catch (error) {
      onError && onError(error)
      console.log("An Error Occurred", error);
    }
  };

  export const deleteBookByID = async ({onSuccess, onError, itemID}) => {
    try {
      const response = await axios.delete(`${endpointURL}/${itemID}`);
      Alert.alert("Book Is Deleted Successfully");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
      
    }
  };

  export const createBook = async ({body, onSuccess, onError}) => {
    try {
      const response = await axios.post(endpointURL, body);
      Alert.alert("Book has been created!");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const updateBook = async({body, itemID, onSuccess, onError}) => {
    try {
      const response = await axios.put(`${endpointURL}/${itemID}`, body);
      Alert.alert("Book has been updated!");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  }