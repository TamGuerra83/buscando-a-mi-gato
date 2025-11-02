
import React from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth'; 

export default function HomeScreen() {
  const { signOut } = useAuth(); 
  const router = useRouter();

  const logout = () => {
    Alert.alert('Sesión cerrada', '¡Nos vemos pronto! 😺');
    signOut();             
    router.replace('/login'); 
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Inicio', headerTitleAlign: 'center' }} />
      <View className="flex-1 items-center justify-center bg-purple-100">
</View>


      <Ionicons name="home-outline" size={64} color={theme.colors.primary} />
      <Text style={styles.title}>Vuelve pronto!</Text>

      <Pressable style={styles.btn} onPress={logout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.btnText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.bg, gap: 12 },
  title: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  btnText: { color: '#fff', fontWeight: '600' },
});
