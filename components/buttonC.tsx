import { StyleSheet, Text, View } from "react-native";

export default function ButtonC() {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Button C</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
