import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginText = () => {
    const navigation = useNavigation();
    return (
      <Text onPress={() => navigation.navigate('Login') }>Login</Text>
    );
}

export default LoginText;