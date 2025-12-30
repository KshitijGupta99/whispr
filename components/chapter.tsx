import { StyleSheet, Text, View } from "react-native";
import PlayWave from "./playWave";
import { EmptyWave } from "./icons/emptyWave";

export default function Chapter({ ChapterTitle }: { ChapterTitle: string }) {
  return (
    <View style={styles.body}>
        <View style={styles.textContainer}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{ChapterTitle}</Text>
            </View>
            <Text style={styles.chapterTime}>2h 34m</Text>
        </View>
        <View style={styles.waveContainer}>
            <EmptyWave />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    waveContainer:{
        display:"flex",
        width: 58,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    },
    chapterTime:{
        color: "#4985FA",
        fontFamily: "Euclid Circular B",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 18,
        textAlign: "left",
    },
    titleText:{
        color: "var(--Text-colors-primary-new, #162029)",
        fontFamily: "Euclid Circular B",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 18,
    },
    title:{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4,
        alignSelf: "stretch",
    },
    textContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 16,
        flex: 1,
    },
    body:{
        flexDirection: "row",
        display: "flex",
        padding: 20,
        height: 76,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 16,
        backgroundColor: "var(--Bg-colors-opaque, #FFF)",
    }
})
