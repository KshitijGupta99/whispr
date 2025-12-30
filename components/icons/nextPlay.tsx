import { Image } from "react-native";

export const NextPlayButton = ({ size = 24 }) => (
  <Image
    source={require("../../assets/icons/nextPlay.png")}
    style={{ width: size, height: size }}
    resizeMode="contain"
  />
);
