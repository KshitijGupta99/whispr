import { Image, View } from "react-native";

export default function PlayWave() {
    return (
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 16, marginBottom: 16 }}   >
            <Image source={require('../assets/icons/playWave.png')} alt="Play Wave" resizeMode="contain"  height={47} width={300}/>
        </View>
    );
}