import { StyleSheet, View, Text, Pressable } from "react-native";
import { PlayIcon } from "./icons/playIcon";
import { router } from "expo-router";

export default function VoiceSelection({ VoiceName = "Emma (recommended)", isrecommended = false }: { VoiceName: string, isrecommended?: boolean }) {
    return(
        <Pressable onPress={() => {router.push("/(tabs)/loading")}} style={styles.voiceSelectionContainer}>
            <View style={styles.textContainer}>
                <View style={styles.upperTextContainer}>
                    <Text style={styles.upperText}>{VoiceName}  </Text>
                    {isrecommended && (<Text style={styles.recommendedText}>Recommended</Text>)}
                </View>
                <Text style={styles.lowerText}>Warm Enaging Stroy teller</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.iconInnerContainer}>
                    <PlayIcon size={56}/>
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    recommendedText:{
        color: "#4985FA",
        // leadingTrim: "both",
        // textEdge: "cap",
        fontFamily: "Euclid Circular B",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 22,
    },
    iconInnerContainer:{
        display: "flex",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    iconContainer:{
        display: "flex",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    lowerText:{
        color: "var(--Text-colors-secondary-new, #646E7D)",
        fontFamily: "Euclid Circular B",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: 22,
    },
    upperText:{
        color: "#162029",
// leading-trim: both;
// text-edge: cap;
        fontFamily: "Euclid Circular B",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 22,
    },
    upperTextContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 4,
        alignSelf: "stretch",
        // flex: 1,
    },
    voiceSelectionContainer: {
        height: 88,
        flexDirection: "row",
        display: "flex",
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: "var(--Bg-colors-opaque, #FFF)",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 16,
        flex: 1,
    }
});
