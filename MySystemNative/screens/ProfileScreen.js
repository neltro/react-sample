import React, { useEffect, useReducer} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import styles from '../styles/registerStyle';
import { profileService } from '../temp/tmpProfileService'; 
import useAuthContext from '../hooks/useAuthContext';

const ProfileScreen = (props) => {
  const authContext = useAuthContext();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
        name: authContext.authUser?.name ?? '',
        email: authContext.authUser?.email ?? '',
        errMsgName: '',
        errMsgEmail: '',
        profileSavedText: '',
        gotoLoginText: ''
    }
  )

  console.log(authContext.authUser?.name ?? '')
  console.log(authContext.authUser?.email ?? '')

  

  const handleNameChange = (value) => {
    setState({name: value});
    if (state.name !== ''){
        setState({errMsgName: ''});
        setState({profileSavedText: ''});
    };
  }

  const handleEmailChange = (value) => {
      setState({email: value});
      if (state.email !== ''){
          setState({errMsgEmail: ''});
          setState({profileSavedText: ''});
      }
  }

  const profilePressed = async () =>{
    console.log(state.name);
    console.log(state.email);

    const result = await profileService({
      name: state.name,
      oldEmail: authContext.authUser.email,
      email: state.email
    });

    console.log(result);
    console.log(result.success);
    if (result.success)
    {
      authContext.setAuthUser({ 
        email: state.email, 
        name: state.name, 
        token: authContext.authUser.token
      });
      setState({profileSavedText: 'Updated successfully.'});
      //navigation.navigate('Login');
      //gotoLogin();
      setTimeout(() => {
        setState({profileSavedText: ''});
      },3000);
    } else {
      setState({errMsgName: ''});
      setState({errMsgEmail: ''});
      setState({profileSavedText: ''});
      result.msgs.map(err => {
        if (err.param === 'name'){
          setState({errMsgName: 'Name is required.'});
        } else if (err.param == 'email'){
          setState({errMsgEmail: 'Please include valid email.'});
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
            value={state.name}
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
            value={state.email}
            onChangeText={emailValue => handleEmailChange(emailValue)}/>
        </View>
        <View style={styles.errMessage}>
          <Text style={styles.errMessage}>{state.errMsgEmail}</Text>
        </View>
        <View style={styles.profileSaved}>
          <Text style={styles.profileSaved}>{state.profileSavedText}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={profilePressed}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.gotoLogin}>{state.gotoLoginText}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ProfileScreen;