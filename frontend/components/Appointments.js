import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';


const Appointments = () =>  {

    
      return (
        <View style={styles.container}>
        
          <Calendar  />
        </View>
      );
}

export default Appointments

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });