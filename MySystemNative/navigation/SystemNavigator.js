import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeButton from '../components/HomeButton';

export default function SystemNavigator() {
    const RootStack = createStackNavigator();
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={DashboardScreen}
                    options={{
                        headerTitle: () => <HomeButton />
                    }}
                />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Dashboard" component={DashboardScreen} />
                <RootStack.Screen name="Register" component={RegisterScreen} />
                <RootStack.Screen name="Profile" component={ProfileScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
  }