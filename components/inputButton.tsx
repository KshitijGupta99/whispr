import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SparkleIcon } from "./icons/sparkle";

interface InputButtonProps {
  label: "Voice" | "Upload";
}

export default function InputButton({ label }: InputButtonProps) {
  const getIcon = () => {
    switch(label) {
      case "Voice":
        return (
          <View style={styles.voiceIconContainer}>
            <Text style={styles.iconText}>🎤</Text>
          </View>
        );
      case "Upload":
        return (
          <View style={styles.uploadIconContainer}>
            <Text style={styles.iconText}>📤</Text>
          </View>
        );
      default:
        return <SparkleIcon />;
    }
  };

  return (
    <View style={styles.button}>
      <View style={styles.buttonLogo}>
        <View style={styles.logoContainer}>
          {getIcon()}
        </View>
      </View>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    padding: 1.5*16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 0.75*16,
    borderRadius: 1.5*16,
    backgroundColor: "#FFF",
    flex: 1,
  },
  buttonLogo: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  logoContainer: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 10, 
  },
  voiceIconContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#F0F5FF",
  },
  uploadIconContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#F0F5FF",
  },
  iconText: {
    fontSize: 28,
  },
  buttonText: {
    color: "#162029",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
  },
});