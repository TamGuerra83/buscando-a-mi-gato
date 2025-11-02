import { Stack } from 'expo-router';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { AuthProvider } from '../hooks/useAuth';      
import { theme } from '../constants/theme';            

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: theme.colors.card },
            headerTintColor: theme.colors.text,
            headerTitleStyle: { color: theme.colors.text },
            contentStyle: { backgroundColor: theme.colors.bg },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
