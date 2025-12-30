import { Image } from "react-native";

export const EmptyWave = () => (
  <Image
    source={require("../../assets/icons/emptyWave.png")}
    style={{ width: 58, height: 35 }}
    resizeMode="contain"
  />
);
