import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size={"large"} color={"green"} />
        <ActivityIndicator />
        <View style={styles.view1}>
          <Text style={styles.text1}>Hello</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 50,
  },
});
