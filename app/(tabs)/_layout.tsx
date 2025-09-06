import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
        },
        animation: 'none'
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      {/* <Stack.Screen name="settings" options={{ title: "Settings" }} /> */}
    </Stack>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
}); 
