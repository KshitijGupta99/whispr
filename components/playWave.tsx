import { Image, View } from "react-native";

export default function PlayWave() {
    return (
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 16, marginBottom: 16 }}   >
            <Image
                source={require('../assets/icons/playWave.png')}
                resizeMode={"contain"}
                style={{ width: 300, height: 47 }}
            />
        </View>
    );
}