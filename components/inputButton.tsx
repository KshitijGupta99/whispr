import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SparkleIcon } from "./icons/sparkle";

export default function InputButton() {
  return (
    <View style={styles.button}>
      <View style={styles.buttonLogo}>
        <View style={styles.logoContainer}>
          <SparkleIcon />
        </View>
      </View>
      <Text style={styles.buttonText}>Press Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1, // flex: 1 0 0 → only "flex: 1" works in RN
    padding: 24, // 1.5rem ≈ 24px (React Native uses numbers, not rem/px)
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap is only supported in React Native 0.71+ (use margin otherwise)
    gap: 12, 
  },
  buttonLogo: {
    padding: 8,           // 0.5rem ≈ 8px
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  logoContainer: {
    padding: 12,           // 0.75rem ≈ 12px
    justifyContent: "center",
    alignItems: "center",
    gap: 10, 
  },
  buttonText: {
    color: "#fff",
    textAlign: "center" as const,
  },
});