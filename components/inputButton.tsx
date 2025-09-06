import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SparkleIcon } from "./icons/sparkle";

export default function InputButton() {
  return (
    <View style={styles.button}>
      <View style={styles.buttonLogo}>
        <View style={styles.logoContainer}>
          <SparkleIcon size={20} />
        </View>
      </View>
        <Text style={styles.buttonText}>Voice</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 24,
    backgroundColor: '#FFF',
  },
  buttonLogo: {
    // flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 1250000,
    backgroundColor: 'linear-gradient(156deg, rgba(255, 157, 86, 0.04) 0%, rgba(73, 133, 250, 0.04) 100%)',
  },
  logoContainer: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12500,
    // gap is not supported in RN, so use margin if needed
  },
  buttonText: {
    color: '#162029',
    textAlign: 'center',
    fontFamily: 'Euclid Circular B', // Make sure this font is loaded via expo-font
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
});