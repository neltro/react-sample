import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/registerStyle';

export default function GotoLogin () {
    return(
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Register')}>Goto login?</Text>
    )
}