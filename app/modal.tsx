// app/modal.tsx
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Información',
          headerTitleAlign: 'center',
        }}
      />
      <Text style={styles.title}>Esto es un modal</Text>
      <Text style={styles.text}>
        Aquí puedes mostrar ayuda, aviso, o detalles rápidos sin salir del Home.
      </Text>

      <Pressable onPress={() => router.back()} style={styles.btn}>
        <Ionicons name="close-outline" size={18} color="#fff" />
        <Text style={styles.btnTxt}>Cerrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg, padding: 20, gap: 14, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'center', color: theme.colors.text },
  text: { textAlign: 'center', color: theme.colors.subtext },
  btn: { alignSelf: 'center', backgroundColor: theme.colors.primaryDark, paddingVertical: 12, paddingHorizontal: 20, borderRadius: theme.radius, flexDirection: 'row', gap: 8 },
  btnTxt: { color: '#fff', fontWeight: '700' },
});
