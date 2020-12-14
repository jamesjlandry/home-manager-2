import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Calendar from './components/Calendar.js'
import Login from './components/login.js';
import Signup from './components/signup.js';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator()


  
 


export default function App() {
  return <NavigationContainer>{
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
          <Drawer.Navigator>
          <Drawer.Screen name="Appointments" component={Calendar}/>
          <Drawer.Screen name="Assignments" component={Calendar}/>
          <Drawer.Screen name="Errands" component={Calendar}/>
          <Drawer.Screen name="Meals" component={Calendar}/>
          <Drawer.Screen name="Projects" component={Calendar}/>
          <Drawer.Screen name="All" component={Calendar}/>
        </Drawer.Navigator>
         {/* <Calendar/> */}
       </View>
       
    }</NavigationContainer>;
}


