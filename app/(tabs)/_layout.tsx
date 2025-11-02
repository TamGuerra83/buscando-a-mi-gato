import { useEffect } from 'react';
import { Tabs, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../hooks/useAuth';     
import { theme } from '../../constants/theme';      

export default function TabsLayout() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

 
  useEffect(() => {
    if (!isSignedIn) {
      router.replace('/login');                     
    }
  }, [isSignedIn, router]);


  if (!isSignedIn) return null;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs
        screenOptions={{
          headerTitle: 'Buscando a mi gato',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: theme.colors.card },
          headerTintColor: theme.colors.text,
          tabBarStyle: { backgroundColor: theme.colors.tabBg, borderTopColor: theme.colors.border },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.tabInactive,
          
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
}
