import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import userService from '../temp/tmpUserService';
import styles from '../styles/loginStyle';
import useAuthContext from '../hooks/useAuthContext';

export default function LoginScreen (props) {
  const authContext = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidText, setInvalidCredential] = useState('');
  const loginPressed = async () => {
    let result = await userService({
        email: email,
        password: password
      })
    if (result.success){
      authContext.setAuthUser({ 
        email: email, 
        name: result.name, 
        token: result.token
      });
      props.navigation.navigate('Home')
    } else {
      setInvalidCredential('Invalid Credential');
    }
  };

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
        <View>
          <Text style={styles.invalidMessage}>{invalidText}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={loginPressed}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registerText} onPress={() => props.navigation.navigate('Register')}>You need to register?</Text>
        </TouchableOpacity>
      </View>
  );
}

