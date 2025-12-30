import Chapter from "@/components/chapter";
import { InfoVertical } from "@/components/icons/infoVertical";
import { LastPlayButton } from "@/components/icons/lastPlay";
import { NextPlayButton } from "@/components/icons/nextPlay";
import { PlayIcon } from "@/components/icons/playIcon";
import PlayWave from "@/components/playWave";
import { StyleSheet, Text, View } from "react-native";

export default function Story() {
  return (
    <View style={styles.body}>
      <View style={styles.uppercontainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Story is Ready!</Text>
          <Text style={styles.headerDesc}>
            2h 34m • 5 chapters
          </Text>
        </View>

        <View style={styles.playArea}>
          <View style={styles.playAreaHeader}>
            <Text style={styles.playAreaTitle}>Chapter 1</Text>
            <Text style={styles.playAreaChapterDesc}>The Beginning</Text>
          </View>
          <View style={styles.playWaveContainer}>
            <PlayWave />
            <View style={styles.playTime}>
              <Text style={styles.currRunPlayTime}>02:54</Text>
              <Text style={styles.totalPlaytime}>24:32</Text>
            </View>
          </View>

          <View style={styles.playControlContainer}>
            <View style={styles.lastPlayContainer}>
              <View style={styles.lastPlayButton}>
                <LastPlayButton size={32}/>
              </View>
            </View>

            <View style={styles.pausePlayContainer}>
              <PlayIcon size={56}/>
            </View>

            <View style={styles.nextPlayContainer}>
              <View style={styles.nextPlayButton}>
                <NextPlayButton size={32}/>
              </View>
            </View>

          </View>
        </View>

        <View style={styles.chaptersContainer}>
          <View style={styles.nextChapterHeader}>
            <Text style={styles.nextChapterHeaderText}>Next Chapters</Text>
          </View>
          <Chapter ChapterTitle="The Journey Continues" />
          <Chapter ChapterTitle="An Unexpected Turn" />
          <Chapter ChapterTitle="The Climax" />
          <Chapter ChapterTitle="A New Beginning" />
        </View>


      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <InfoVertical />
        </View>
        <View style={styles.shareContainer}>
          <Text style={styles.shareText}>Share</Text>
        </View>
        <View style={styles.createContainer}>
          <Text style={styles.createText}>Create New</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  createText:{
    color: "var(--Text-colors-primary-inverted, #FFF)",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
  createContainer:{
    display: "flex",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    flex: 1,
    borderRadius: 200000,
    backgroundColor: "#4985FA",
  },
  shareText:{
    color: "#4985FA",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
  shareContainer:{
    // width: ,
    display: "flex",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    flex: 1,
    borderRadius: 200000,
    borderWidth: 1,
    borderColor: "#4985FA",
    borderStyle: "solid",
    backgroundColor: "var(--Bg-colors-opaque, #FFF)",
  },
  infoContainer:{
    display: "flex",
    width: 56,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    flexShrink: 0,
  },
  bottomContainer: {
    flexDirection: "row",
    display: "flex",
    width: "auto",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 20,
    backgroundColor: "var(--Bg-colors-opaque, #FFF)",
    boxShadow: "1px 1px 12px 0 rgba(0, 0, 0, 0.08)",
  },
  nextChapterHeaderText: {
    color: "var(--Text-colors-primary-new, #162029)",
    textAlign: "center",
    // leadingTrim: "both",
    // textEdge: "cap",
    fontFamily: "Euclid Circular B",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 22,
  },
  nextChapterHeader:{
    display: "flex",
    padding: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 24,
    alignSelf: "stretch",
  },
  chaptersContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
  },
  nextPlayButton:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 200000,
    // backgroundColor: "var(--Bg-colors-opaque, #FFF)",
  },
  nextPlayContainer:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 20000000,
  },
  pausePlayButton:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 200000,
    backgroundColor: "var(--Bg-colors-opaque, #FFF)",
  },
  pausePlayContainer:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 20000000,
    backgroundColor: "linear-gradient(156deg, #FF9D56 0%, #4985FA 100%)",
  },
  lastPlayButton:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  lastPlayContainer:{
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  playControlContainer:{
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  totalPlaytime:{
    color: "var(--Text-colors-secondary-new, #646E7D)",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
  currRunPlayTime: {
    color: "var(--Text-colors-secondary-new, #646E7D)",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
  playTime:{
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  body:{
    display: "flex",
    marginTop: 16*2,
    height: "100%",
    // marginHorizontal: 16,
    backgroundColor: "var(--Bg-colors-light, #F0F3FA)",
  },
  playWaveContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    alignSelf: "stretch",
    width: "100%",
  },
  playAreaChapterDesc: {
    color: "var(--Text-colors-secondary-new, #646E7D)",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
  playAreaTitle: {
    color: "var(--Text-colors-primary-new, #162029)",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 10,
  },
  playAreaHeader: {
    maxHeight: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  playArea: {
    // height: 260,
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    alignSelf: "stretch",
    backgroundColor: "var(--Bg-colors-opaque, #FFF)",
    borderRadius: 20,
  },
  uppercontainer: {
    marginHorizontal: 16,
    width:"auto",
    display: "flex",
    // width: 390,
    // height: 868,
    flexDirection: "column",
    alignItems: "center",
    gap: 28,
    flexShrink: 0,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
  },
  headerText: {
    color: "#162029",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 18,
  },
  headerDesc: {
    color: "#646E7D",
    textAlign: "center",
    fontFamily: "Euclid Circular B",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
});
