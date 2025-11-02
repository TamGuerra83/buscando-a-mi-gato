# 🐾 Proyecto: **Buscando a mi Gato**

Aplicación móvil desarrollada con **React Native** y **Expo Router**, utilizando **TypeScript**.  
El objetivo principal del proyecto es implementar un flujo básico de **inicio de sesión**, manejo de **estado global** mediante Hooks y navegación con **pestañas (Tabs)**.

---

## 📱 Descripción general

Al abrir la aplicación, se muestra la pantalla de **Login**, donde el usuario debe ingresar su correo y contraseña.  
Si la contraseña es correcta (`1234`), la aplicación muestra una alerta de éxito y redirige al **Home**, donde aparece un mensaje de bienvenida y la opción de **cerrar sesión**.  
En el **Perfil**, se muestra el correo con el que el usuario inició sesión.

---

## 🧠 Lógica general del proyecto

### 🔹 1. Flujo principal

- La app siempre inicia en la pantalla de **Login**.
- Si el usuario inicia sesión correctamente, accede al grupo de pestañas `(tabs)`, donde están las pantallas **Home** y **Perfil**.
- Si no hay sesión activa, la aplicación redirige automáticamente al **Login**.

📁 **Estructura general del proyecto:**



---

### 🔹 2. Contexto de autenticación (`useAuth.tsx`)

- Controla el estado global de la sesión.
- Contiene:
  - `isSignedIn`: indica si el usuario está logueado.
  - `email`: almacena el correo ingresado.
  - `signIn(email)`: inicia sesión.
  - `signOut()`: cierra sesión.

Este contexto se aplica a toda la app a través del **AuthProvider** en el archivo `app/_layout.tsx`.

---

### 🔹 3. Pantalla de Login (`login.tsx`)

- Maneja los campos de **correo** y **contraseña** con `useState`.
- Valida los datos ingresados:
  - Si hay campos vacíos → alerta de advertencia.
  - Si la contraseña es incorrecta → alerta de error.
  - Si la contraseña es correcta (`1234`) → inicia sesión y redirige al Home.
- Usa `useEffect` para detectar cuando el usuario inicia sesión y navegar automáticamente.

🧩 **Acción principal:**
```tsx
if (isSignedIn) {
  router.replace('/'); // redirige al Home después de iniciar sesión
}
# buscando-a-mi-gato
