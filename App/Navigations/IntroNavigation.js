import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Pages/SignInScreen';
import SignUpScreen from '../Pages/SignUpScreen';
import Login from '../Pages/Login';
// import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const IntroNavigation = () => {
  return (
    <>
        <StatusBar barStyle="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} /> 
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    </>
  
  )
}

export default IntroNavigation