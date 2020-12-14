import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';


const Calendar = ({ navigation }) =>  {

    const sampleEvents = [
        { 'start': '2020-12-15 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
        { 'start': '2020-12-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
        { 'start': '2020-12-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
        { 'start': '2020-12-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
        { 'start': '2020-12-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
        { 'start': '2020-12-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2020-12-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2020-12-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2020-12-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        { 'start': '2020-12-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
      ]
    
      return (
        <View style={styles.container}>
          {/* <Button
            title='Log Out'
            onPress={() => navigation.navigate('Login')}
          /> */}
          <WeeklyCalendar events={sampleEvents} style={{ height: 400 }} />
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

