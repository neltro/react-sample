import React from 'react';
import { AuthContextProvider } from './context/auth-context';
import SystemNavigator from './navigation/SystemNavigator';

export default function App() {
  return (
    <AuthContextProvider> 
        <SystemNavigator />
    </AuthContextProvider>
  );
}
