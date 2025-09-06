import { Image } from "react-native";

export const SparkleIcon = ({ size = 32 }) => (
  <Image
    source={require("../../assets/icons/sparkle.png")}
    style={{ width: size, height: size }}
    resizeMode="contain"
  />
);
