// app/login.tsx
import React from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { isSignedIn, signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [pass, setPass]   = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (isSignedIn) {
   
      router.replace('/profile');
     
    }
  }, [isSignedIn, router]);

  const handleLogin = () => {
    setError('');
    const e = email.trim().toLowerCase();
    const p = pass.trim();

    if (!e || !p) {
      setError('Completa ambos campos.');
      Alert.alert('Campos vacíos', 'Por favor completa email y contraseña.');
      return;
    }
    if (p !== '1234') {
      setError('Contraseña incorrecta');
      Alert.alert('Error', 'Contraseña incorrecta');
      return;
    }

    signIn(e);
    Alert.alert('Login exitoso', 'Bienvenid@ 😺');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Ionicons name="paw-outline" size={22} color="#5C6BBF" />
              <Text style={{ fontWeight: '700', color: theme.colors.text }}>
                Buscando a mi Gato
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <View style={styles.card}>
        <Ionicons
          name="person-circle-outline"
          size={60}
          color={theme.colors.primary}
          style={{ alignSelf: 'center' }}
        />
        <Text style={styles.title}>Inicia sesión</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderTextColor={theme.colors.subtext}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={pass}
          onChangeText={setPass}
          secureTextEntry
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={handleLogin}
          placeholderTextColor={theme.colors.subtext}
          style={styles.input}
        />

        {!!error && <Text style={styles.error}>{error}</Text>}

        <Pressable
          onPress={handleLogin}
          style={styles.btn}
          hitSlop={6}
          accessibilityRole="button"
          accessibilityLabel="Entrar"
        >
          <Ionicons name="log-in-outline" size={20} color="#fff" />
          <Text style={styles.btnText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:theme.colors.bg, padding:20 },
  card:{ width:'90%', maxWidth:400, backgroundColor:theme.colors.card, borderRadius:12, padding:20, gap:10, elevation:3, borderWidth:1, borderColor:theme.colors.border },
  title:{ fontSize:18, fontWeight:'bold', textAlign:'center', color:theme.colors.text, marginBottom:10 },
  input:{ borderWidth:1, borderColor:theme.colors.border, borderRadius:10, padding:10, backgroundColor:'#fff', fontSize:14 },
  btn:{ flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:theme.colors.primary, borderRadius:10, paddingVertical:12, marginTop:10, gap:6 },
  btnText:{ color:'#fff', fontWeight:'600' },
  error:{ color:theme.colors.danger, fontSize:12, marginTop:4 },
});
