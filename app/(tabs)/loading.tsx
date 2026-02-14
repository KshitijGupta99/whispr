import { SparkleIcon } from "@/components/icons/sparkle";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Loading() {
  setTimeout(() => {
    router.replace("/(tabs)/story");
  }, 3000);

  return (
    <View style={styles.body}>
      <LinearGradient
        colors={["#4985FA", "#FF9D56"]}
        style={styles.gradientBorder}
      >
        <View style={styles.innerCircle}>
          <SparkleIcon size={41.28} />
        </View>
      </LinearGradient>
      <View style={styles.midContainer}>
        <Text style={styles.upperText}>We're giving your story a voice...</Text>
        <Text style={styles.lowerText}>Selecting perfect voice settings...</Text>
      </View>
      <View style={styles.circular}>
        <Text style={styles.circularText}>Using emma voice</Text>
      </View>
    </View>
  );
}

const BORDER_WIDTH = 4;
const SIZE = 248;

const styles = StyleSheet.create({
    circularText:{
        color: "#4985FA",
        textAlign: "center",
        fontFamily: "Euclid Circular B",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 22,
    },
    circular:{
        display: "flex",
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        alignSelf: "stretch",
        paddingHorizontal: 24,
    },
    lowerText:{
        color: "#162029",
        textAlign: "center",
        fontFamily: "Euclid Circular B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 22,
    },
    upperText:{
        color: "#162029",
        textAlign: "center",
        fontFamily: "Euclid Circular B",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: 22,
    },
    midContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        alignSelf: "stretch",
    },
  gradientBorder: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    padding: BORDER_WIDTH, // this creates the border thickness
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: (SIZE - BORDER_WIDTH * 2) / 2,
    backgroundColor: "#F9FBFF", // background inside the circle
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#F9FBFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 390,
    height: 868,
    flexDirection: "column",
    gap: 48,
    flexShrink: 0,
  },
});
