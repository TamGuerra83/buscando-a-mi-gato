import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';    
import { theme } from '../../constants/theme';     

export default function ProfileScreen() {
  const { email } = useAuth();                     

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Perfil', headerTitleAlign: 'center' }} />
      <Text style={styles.label}>Bienvenido:</Text>
      <Text style={styles.email}>{email ?? '—'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.bg, padding: 20, gap: 8 },
  title: { fontSize: 22, fontWeight: '700', color: theme.colors.text },
  label: { color: theme.colors.subtext },
  email: { color: theme.colors.text, fontWeight: '700' },
});
