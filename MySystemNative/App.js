import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeButton from './components/HomeButton';
import LoginText from './components/LoginText';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
      <RootStack.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                  headerTitle: () => <HomeButton />,
                  headerRight: () => <LoginText />
                }}
              />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Dashboard" component={DashboardScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
