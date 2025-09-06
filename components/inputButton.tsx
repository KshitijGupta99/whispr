import { Text, TouchableOpacity } from "react-native";

export default function InputButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
}

const styles = {
    button: {
        backgroundColor: "#4985FA",
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
};