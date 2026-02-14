import { SparkleIcon } from "@/components/icons/sparkle";
import { View, StyleSheet, Text } from "react-native";
import { PlayIcon } from "@/components/icons/playIcon";
import VoiceSelection from "@/components/voiceSelection";

export default function VoicePage() {
    return(
        <View style={styles.body}>
            <View style={styles.upperContainer}>
                <SparkleIcon size={48}/>
                <Text style={styles.upperText}>Choose Voice for your podcast</Text>
            </View>
            <View style={styles.lowerContainer}>
                <View style={styles.sampleTextContainer}>
                    <Text style={styles.sampleText}>Hello,{'\n'}
I am Prashant Kumar Singh,{'\n'}
Working as a software developer and product designer for past few years.</Text>
                </View>
                <View style = {styles.voiceSelectionContainer}>
                    <View style={styles.voiceSelectionHeaderContainer}>
                        <Text style={styles.voiceSelectionHeaderText}>Choose Voice</Text>
                    </View>
                    <VoiceSelection VoiceName="Emma" isrecommended={true} />
                    <VoiceSelection VoiceName="Emma"/>
                    <VoiceSelection VoiceName="Emma"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    voiceSelectionTextHeaderContainer:{
        display: "flex",
        alignItems: "center",
        gap: 4,
        flex: 1,
        alignSelf: "stretch",
    },
    body:{
        display: "flex",
        // width: 390,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginTop: 64,
        marginHorizontal: 20,
        // backgroundColor: "#F9FBFF",
    },
    upperContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        alignSelf: "stretch",
        // backgroundColor: "#F9FBFF",
    },
    upperText:{
        color: "#162029",
        textAlign: "center",
        // leadingTrim: "both",
        // textEdge: "cap",
        fontFamily: "Euclid Circular B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 22,
    },
    lowerContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        flex: 1,
        alignSelf: "stretch",
    },
    sampleTextContainer:{
        display: "flex",
        minHeight: 296,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        flex: 1,
        alignSelf: "stretch",
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
    },
    sampleText:{
        color:  "#162029",
        // leading-trim: both,
        // text-edge: cap,
        fontFamily: "Euclid Circular B",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 22
    },
    voiceSelectionContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        alignSelf: "stretch",
    },
    voiceSelectionHeaderContainer: {
        display: "flex",
        paddingVertical: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 24,
        alignSelf: "stretch",
    },
    voiceSelectionHeaderText: {
        color: "#162029",
        textAlign: "center",
        // leadingTrim: "both",
        // textEdge: "cap",
        fontFamily: "Euclid Circular B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 22,
    }
})