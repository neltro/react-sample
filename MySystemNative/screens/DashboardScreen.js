import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import styles from '../styles/dashboardStyle';
import useAuthContext from '../hooks/useAuthContext';
import HomeScreen from '../screens/HomeScreen';

const DashboardScreen = (props) => {
  const authContext = useAuthContext();
  const hasToken = authContext?.authUser?.token ?? null;
  
  console.log('before logoutPressed');
  const logoutPressed = () => {
    authContext.setAuthUser({});
    return (
      <HomeScreen />
    )
  }

  if (!hasToken){
    return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => props.navigation.navigate('Login')}>
            <Text 
              style={styles.buttonText} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => props.navigation.navigate('Register')}>
            <Text 
              style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      )
  }
  else {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => props.navigation.navigate('Profile')}>
          <Text 
            style={styles.buttonText} >Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => props.navigation.navigate('Register')}>
          <Text 
            style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={logoutPressed}>
          <Text 
            style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

export default DashboardScreen;