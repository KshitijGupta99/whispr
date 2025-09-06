// app/_layout.tsx

import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontLoader from './_fontLoader';

export default function Layout() {
  return (
    <FontLoader>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          {/* <Stack.Screen name="settings" options={{ title: "Settings" }} /> */}
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </FontLoader>
  );
}
