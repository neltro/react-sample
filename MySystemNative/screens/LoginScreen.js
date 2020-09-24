import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput
} from 'react-native';
import login from '../services/userService';

export default function LoginScreen () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const loginPressedHandler =  useCallback( () => {
    (async () => {
      let result = await login({
        email: email,
        password: password
      })
    });
    console.log(result);

    navigation.navigate('Dashboard');

  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={emailValue => setEmail(emailValue)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={passwordValue => setPassword(passwordValue)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={loginPressedHandler}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>You need to register?</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  registerText: {
    color:"#003f5c"
  }
});