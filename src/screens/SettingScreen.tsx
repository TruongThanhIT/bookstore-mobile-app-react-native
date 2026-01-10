import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { name, params } = useRoute();
  console.log(name);
  console.log(params);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm React Native</Text>
      <Button
        title="Go to profile screen"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
