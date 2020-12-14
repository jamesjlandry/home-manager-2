import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from './components/Calendar.js'
import Login from './components/login.js';
import Signup from './components/signup.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'

const Stack = createStackNavigator(
  {
    Home: Calendar,
    Login: Login,
    Signup: Signup,
  }
)


export default function App() {
  return <NavigationContainer>{
      
    }</NavigationContainer>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
