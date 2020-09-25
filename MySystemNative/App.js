import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeButton from './components/HomeButton';
import ProfileScreen from './screens/ProfileScreen';
import { AuthContextProvider } from './context/auth-context';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}
