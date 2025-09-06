import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

export default function FontLoader({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    'Euclid Circular B': require('../assets/fonts/Euclid Circular B Regular.ttf'),
    'Euclid Circular B Bold': require('../assets/fonts/Euclid Circular B Bold.ttf'),
    'Euclid Circular B Italic': require('../assets/fonts/Euclid Circular B Italic.ttf'),
    'Euclid Circular B Bold Italic': require('../assets/fonts/Euclid Circular B Bold Italic.ttf'),
    'Euclid Circular B Light': require('../assets/fonts/Euclid Circular B Light.ttf'),
    'Euclid Circular B Light Italic': require('../assets/fonts/Euclid Circular B Light Italic.ttf'),
    'Euclid Circular B Medium': require('../assets/fonts/Euclid Circular B Medium.ttf'),
    'Euclid Circular B Medium Italic': require('../assets/fonts/Euclid Circular B Medium Italic.ttf'),
    'Euclid Circular B SemiBold': require('../assets/fonts/Euclid Circular B SemiBold.ttf'),
    'Euclid Circular B SemiBold Italic': require('../assets/fonts/Euclid Circular B SemiBold Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator /></View>;
  }

  return <>{children}</>;
}
