import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();


export default function App() {

  const [fontsLoader] = useFonts({
    'Archivo-Black-Regular': require('./assets/fonts/Archivo-Black-Regular.ttf'),
    'Arial-Rounded-Font': require('./assets/fonts/Arial-Rounded-Font.ttf')
  })

  if (!fontsLoader) {
    return undefined;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}