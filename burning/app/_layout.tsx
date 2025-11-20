import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Stack will open welcome/index.tsx first */}
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="welcome/index" // this makes welcome/index open first
      />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
