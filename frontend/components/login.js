import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,} from 'react-native';




const Login = ({ navigation })  => {

   
      const [email, setEmail] = React.useState('');
      const [pass, setPass] = React.useState('');
    
    
     
    
     
    
      return (
      <View style={styles.countainer}>
            <Button
                title="Log in"
                onPress={()=> navigation.navigate('Home')}
            />
            <Button 
                title="Create Account"
                onPress={() => navigation.navigate('SignUp')}
            />
      </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#3498db'
        },
        title:  {
            width: 150,
            marginTop: 10,
            color: '#FFF',
        }
    })

    export default  Login
    