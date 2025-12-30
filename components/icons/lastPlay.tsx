import { Image } from "react-native";

export const LastPlayButton = ({ size = 24 }) => (
  <Image
    source={require("../../assets/icons/lastPlay.png")}
    style={{ width: size, height: size }}
    resizeMode="contain"
  />
);
