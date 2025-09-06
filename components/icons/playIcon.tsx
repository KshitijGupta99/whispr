import { Image, View } from "react-native";

export const PlayIcon = ({ size = 24 }) => (
    <View style = {{display: "flex",
padding: 8,
justifyContent: "center",
alignItems: "center",
gap: 10}}>
        <Image
            source={require("../../assets/icons/play.png")}
            style={{ width: size, height: size }}
            resizeMode="contain"
        />
    </View>
);
