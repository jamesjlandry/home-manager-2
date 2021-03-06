import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';


const Calendar = ({ props }) =>  {

    
      return (
        <View style={styles.container}>
        
          <WeeklyCalendar events={} style={{ height: 500 }} />
        </View>
      );
}

export default Calendar

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

