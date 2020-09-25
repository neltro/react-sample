import React, { useReducer} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import styles from '../styles/registerStyle';
import registerService from '../temp/tmpRegisterService'; 
import useAuthContext from '../hooks/useAuthContext';

const RegisterScreen = (props) => {
  const authContext = useAuthContext();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
        name: '',
        email: '',
        password: '',
        errMsgName: '',
        errMsgEmail: '',
        errMsgPassword: '',
        gotoLoginText: ''
    }
  )

  const handleNameChange = (value) => {
    setState({name: value});
    if (state.name !== ''){
        setState({errMsgName: ''});
    };
  }

  const handleEmailChange = (value) => {
      setState({email: value});
      if (state.email !== ''){
          setState({errMsgEmail: ''});
      }
  }

  const handlePasswordChange = (value) => {
      setState({password: value});
      if (state.password !== ''){
          setState({errMsgPassword: ''});
      }
  }

  const gotoLogin = () => {
    setState({gotoLoginText: 'Redirect to login in 3 seconds...'});
    setTimeout(() => {
      props.navigation.navigate('Login');
    },3000);
  }

  const registerPressed = async () =>{
    const result = await registerService({
      name: state.name,
      email: state.email,
      password: state.password
    });

    if (result.success)
    {
      //navigation.navigate('Login');
      gotoLogin();
    } else {
      setState({errMsgName: ''});
      setState({errMsgEmail: ''});
      setState({errMsgPassword: ''});
      result.msgs.map(err => {
        if (err.param === 'name'){
          setState({errMsgName: 'Name is required.'});
        } else if (err.param == 'email'){
          setState({errMsgEmail: 'Please include valid email.'});
        } else if (err.param == 'password'){
          setState({errMsgPassword: 'Please enter password at least 6 or more characters.'});
        }
      });
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name" 
            placeholderTextColor="#003f5c"
            onChangeText={nameValue => handleNameChange(nameValue)}/>
        </View>
        <View>
          <Text style={styles.errMessage}>{state.errMsgName}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={emailValue => handleEmailChange(emailValue)}/>
        </View>
        <View style={styles.errMessage}>
          <Text style={styles.errMessage}>{state.errMsgEmail}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={passwordValue => handlePasswordChange(passwordValue)}/>
        </View>
        <View>
          <Text style={styles.errMessage}>{state.errMsgPassword}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={registerPressed}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.gotoLogin}>{state.gotoLoginText}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default RegisterScreen;