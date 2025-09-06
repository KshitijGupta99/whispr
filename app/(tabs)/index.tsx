import { View, Text } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { SparkleIcon } from "@/components/icons/sparkle";
export default function HomeScreen() {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: colors.text.primary }}>Home Screen</Text>
            <SparkleIcon />
        </View>
    );
}
