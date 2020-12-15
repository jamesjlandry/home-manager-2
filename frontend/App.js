import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import Calendar from './components/Calendar.js'
import Login from './components/login.js';
import Signup from './components/signup.js';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';


useEffect( async () => {
  let response = await fetch('http://localhost:3000/appointments')
  let currentAppointments = await response.json()
      dispatchEvent({type: "SET_APPOINTMENTS", currentAppointments: currentAppointments})
}, [])

useEffect( async () => {
  let response = await fetch('http://localhost:3000/assignments')
  let currentAssignments = await response.json()
      dispatchEvent({type: "SET_ASSIGNMENTS", currentAssignments: currentAssignments})
}, [])

useEffect( async () => {
  let response = await fetch('http://localhost:3000/errands')
  let currentErrands = await response.json()
      dispatchEvent({type: "SET_ERRANDS", currentErrands: currentErrands})
}, [])

useEffect( async () => {
  let response = await fetch('http://localhost:3000/meals')
  let currentMeals = await response.json()
      dispatchEvent({type: "SET_MEALS", currentMeals: currentMeals})
}, [])

useEffect( async () => {
  let response = await fetch('http://localhost:3000/projects')
  let currentProjects = await response.json()
      dispatchEvent({type: "SET_PROJECTS", currentProjects: currentProjects})
}, [])



const Drawer = createDrawerNavigator()


  
 


export default function App() {
  return <NavigationContainer>
       
        
          <Drawer.Navigator>
          <Drawer.Screen name="Appointments" component={Calendar}/>
          <Drawer.Screen name="Assignments" component={Calendar}/>
          <Drawer.Screen name="Errands" component={Calendar}/>
          <Drawer.Screen name="Meals" component={Calendar}/>
          <Drawer.Screen name="Projects" component={Calendar}/>
          <Drawer.Screen name="All" component={Calendar}/>
        </Drawer.Navigator>
      
       
    </NavigationContainer>;
}


