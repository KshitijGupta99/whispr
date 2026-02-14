import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { SparkleIcon } from "@/components/icons/sparkle";
import InputButton from "@/components/inputButton";
import { router } from "expo-router";
export default function HomeScreen() {
  const { colors } = useTheme();
  return (
   
    <View style={styles.body}>
      <View style={styles.upperContainer}>
        <View style={styles.logoContainer}>
          {/* <SparkleIcon size={48} color={colors.primary} /> */}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>What would you like to make today?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <InputButton label ="Voice" />
        <InputButton label ="Upload" />
      </View>
      <View style={styles.lowerContainer}>
        <TextInput style={styles.inputText} placeholder="Type your prompt here..." />
        {/* <Text style={styles.lowerText}>Don't worry, you can change this later!</Text> */}
      </View>
      <View>
        {/* <Pressable onPress={() => router.push("/create")} style={{backgroundColor: colors.primary, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 200000}}> */}
          <Text style={styles.createButtonText}>Let's Create Storybook </Text>
        {/* </Pressable> */}
        <View style={{marginTop: 68}}>
          <Text style={styles.lowerText}>Try: "Turn my wedding speech into an audiobook"</Text>
          <Text style={styles.lowerText}>Or: "I wrote a children's story I'd like narrated"</Text>
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
    // fill: "var(--Bg-colors-grey-light, #F9FBFF)",
    backgroundColor: "#F9FBFF",
  },
  upperContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    height: "20%",
    // height: "30%",
    // justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  textContainer: {
    // backgroundColor: "grey",
    paddingHorizontal: 16,
    paddingBottom: 40,
    borderRadius: 16,
  },
  upperText:{
    color: '#162029',
    textAlign: "center",
    // leadingTrim: "both",
    // textEdge: "cap",
    fontFamily: "Euclid Circular B",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    // backgroundColor: "green"
    // lineHeight: "normal",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    // backgroundColor: "blue",
    borderRadius: 16,
    height: 135
  },
  lowerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 16,
    // paddingVertical: 24,
    // backgroundColor: "purple",
    borderRadius: 16,
    marginTop: 24,
  },
  lowerText: {
    color: "#162029",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    // lineHeight: "normal",
    // lineHeight: "normal",
  },
  inputText: {
    // minHeight: 48,
    textAlignVertical: "top",
    width: 378,
    maxHeight: 376,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  createButtonText: {
    color: "#FFF",
    borderRadius: 200000,
    backgroundColor: "#4985FA",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    width: 390,
    height: 52,
    // lineHeight: "normal",
  },
});

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: "#FAFAFA", // fallback from var()
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 72,
//     flexShrink: 0,
//     paddingVertical: 16*2,
//     paddingHorizontal: 20,
//   },
//   inputContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     gap: 0.75*16,
//     padding: 6,
//     alignSelf: "stretch",
//     display: "flex",
//     width: "100%",
//   },
//   upperContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 2.5*16,
//     alignSelf: "stretch",
//     width: "100%",

//   },
//   logoContainer: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 15*16,
//     alignSelf: "stretch",
//     width: "100%",

//   },
//   sparkleContainer: {
//     width: 48,
//     height: 48,
//     aspectRatio: 1 / 1,
//   },
//   textContainer: {
//     color: "#162029", // fallback from var()
//     textAlign: "center",
//     fontFamily: "Euclid Circular B", // must be linked or loaded via expo-font
//     fontSize: 20, // 1.25rem ≈ 20px
//     fontStyle: "normal",
//     fontWeight: "500",
//     lineHeight: 20,
//   },
//   innerContainer: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 0.75*16,
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   textInputContainer: {
//     backgroundColor: "#FFFFFF", // fallback from var()
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 12,
//     flex: 1,
//     minHeight: 276,
//     alignSelf: "stretch",
//     padding: 16,
//     borderRadius: 16,
//   },
//   textInput: {
//     minHeight: 48,
//     padding: 20*16,
//     // justifyContent: "center",
//     // alignItems: "center",
//     gap: 0.5*16,
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   inputTextPlaceholder: {
//     color: "#646E7D",
//     // leadingTrim is not supported in React Native
//     // textEdge is not supported in React Native
//     fontFamily: "Euclid Circular B",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: 22,
//   },
//   innerTextInputContainer: {
//     display: "flex",
//     flexDirection: "column",
//     // justifyContent: "center",
//     // alignItems: "center",
//     gap: 12,
//     flex: 1,
//     alignSelf: "stretch",
//     borderRadius: 16,
//   },
//   submitButtonContainer:{
//     display: "flex",
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 4,
//     alignSelf: "stretch",
//     borderRadius: 200000,
//     backgroundColor: "#4985FA",
//   },
//   submitButtonText: {
//     color: "#FFF",  
//     textAlign: "center",
//     fontFamily: "Euclid Circular B",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: 22,
//   },
//   lowerContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   lowerText: {
//     color: "#162029",
//     textAlign: "center",
//     // leadingTrim: "both",
//     // textEdge: "cap",
//     fontFamily: "Euclid Circular B",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "400",
//     lineHeight: 22,
//   }
// });
